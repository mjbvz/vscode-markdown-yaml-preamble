//@
'use strict';

exports.activate = function activate(_context) {
    return {
        extendMarkdownIt(md) {
            return md.use(require('markdown-it-github-preamble'));
        }
    };
}