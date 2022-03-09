const fs = require('fs');
const scrape = require('scrape-it');

function typeconv(v) {
	let ret;
	switch (v) {
		case 'void':
			ret = 'undefined';
			break;
		case 'java.lang.String':
			ret = 'string';
			break;
		case 'java.util.Hashtable<java.lang.String,java.lang.Object>':
		case 'java.util.HashTable<java.lang.String,java.lang.Object':
		case 'ServerCommandProxy.TaskStatus':
			ret = 'object';
			break;
		case 'java.util.Vector<java.lang.String>':
		case 'java.util.Vector<java.util.Vector<java.lang.String>>':
			ret = 'array';
			break;
		default:
			ret = v;
			break;
	}
	return ret;
}

const html = fs.readFileSync('./ServerCommandProxy.html', 'utf8');
const data = scrape.scrapeHTML(html, {
	methods: {
		listItem: 'tr',
		data: {
			return_type: {
				selector: 'td.colFirst > code',
				convert: typeconv,
			},
			name: {
				selector: 'th.colSecond > code > span.memberNameLink > a',
			},
			parameters: {
				selector: 'th.colSecond > code',
				convert: v => {
					const match = v.match(/\(((.*\n*)*?)\)/);
					if (match !== null) {
						const params = match[1].split(',').map(e => {
							const s = e.trim().split(/\s/);
							const ret = { name : s[1] };
							ret.type = typeconv(s[0]);
							return ret;
						});
						return params;
					}
				},
			},
			description: {
				selector: 'td.colLast > div.block',
			},
		},
	},
});

const methodNames = [];
const methods = data.methods.filter(
	e => e.return_type !== '' && e.name !== '' && e.parameters !== undefined
).map(e => {
	let v = 2;
	let mn = e.name;
	while (methodNames.indexOf(mn) > -1) {
		mn = `${e.name}_${v++}`;
	}
	methodNames.push(mn);
	e.jsName = mn;
	return e;
});

fs.writeFileSync('./papercut_api.json', JSON.stringify(methods));

const fn = './docs.js';
if (fs.existsSync(fn)) fs.truncateSync(fn);

methods.forEach(e => {
	const dox = [
		'/**',
		` * ${e.description}`,
		` * @function ${e.jsName}`,
		' * @memberof PaperCut',
		' * @instance',
		` * @return {Promise} Resolves with ${e.return_type}, rejects on error`,
		' */'
	];
	e.parameters.forEach(ee => {
		if (ee.name === undefined) return;
		dox.splice(-2, 0, `* @param {${ee.type}} ${ee.name}`);
	});
	fs.appendFileSync(fn, dox.join('\r\n') + '\r\n');
});
