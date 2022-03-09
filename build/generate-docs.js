const fs = require('fs');
const path = require('path');
const jsdoc2md = require('jsdoc-to-markdown');

fs.copyFileSync(path.join(__dirname, '..', 'data', 'header.md'), path.join(__dirname, '..', 'README.md'));

const jsdoc = jsdoc2md.renderSync({
    files: [
        path.join(__dirname, '..', 'index.js'),
        path.join(__dirname, '..', 'data', 'docs.js'),
    ],
});

fs.appendFileSync(path.join(__dirname, '..', 'README.md'), jsdoc);