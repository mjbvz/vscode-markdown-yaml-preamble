
import * as mdItPreamble from 'markdown-it-github-preamble';
import type MarkdownIt from 'markdown-it';

export function activate() {
    return {
        extendMarkdownIt(md: MarkdownIt) {
            return md.use(mdItPreamble);
        }
    };
}