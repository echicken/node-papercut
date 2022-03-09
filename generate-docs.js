const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');

fs.copyFileSync('./header.md', './README.md');

const jsdoc = jsdoc2md.renderSync({
    files: [
        './index.js',
        './docs.js',
    ],
});

fs.appendFileSync('./README.md', jsdoc);