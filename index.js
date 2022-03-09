'use strict';
const fs = require('fs');
const xmlrpc = require('xmlrpc');

const api_spec = JSON.parse(fs.readFileSync(__dirname + '/papercut_api.json', 'utf8'));

/**
 * An interface to the PaperCut XML web services API
 */
class PaperCut {

	/**
	 * Create an instance
	 * @param {string} host - The PaperCut server's FQDN
	 * @param {number} port - Connect to this port number
	 * @param {string} token - Your API token
	 * @param {string} path - The path to the XML web service
	 * @param {boolean} tls - Use SSL/TLS
	 */
	constructor (host, port, token, path = '/rpc/api/xmlrpc', tls = true) {

		const o = { host, port, path };
		const client = tls ? xmlrpc.createSecureClient(o) : xmlrpc.createClient(o);

		/**
		 * Call an arbitrary method on the API
		 * @return {Promise} Resolves with API response or rejects with error
		 * @param {string} method - Method name, eg. 'getUserAccountBalance'
		 * @param {...(string|number|boolean)} param - Parameter(s) for the method call
		 */
		this.call_api = function (method, ...params) {
			return new Promise((resolve, reject) => {
				client.methodCall(`api.${method}`, [token].concat(...params), (e, v) => {
					e ? reject(e) : resolve(v);
				});
			});
		}

	}

}

api_spec.forEach(method => {

	if (PaperCut.prototype[method.jsName] !== undefined) return;

	PaperCut.prototype[method.jsName] = function (...params) {
    	method.parameters.forEach((e, i) => {
			if (params[i] === undefined) throw `Parameter ${e.name} ${e.type} missing`;
			switch (e.type) {
				case 'array':
					if (!Array.isArray(params[i])) throw `${e.name} is not an array`;
					break;
				case 'double':
					params[i] = parseFloat(params[i]);
					if (isNaN(params[i])) throw `${e.name} is not a float`;
					params[i] = parseFloat(params[i].toFixed(2));
					break;
				case 'int':
					params[i] = parseInt(params[i], 10);
					if (isNaN(params[i])) throw `${e.name} is not an integer`;
					break;
				default:
					if (typeof params[i] != e.type) throw `${e.name} must be ${e.type}`;
					break;
			}
	    });
    	return this.call_api(method.name, params);
	}

});

module.exports = PaperCut;
