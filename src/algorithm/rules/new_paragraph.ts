import { Rule } from '../primitives';

export class ParagraphRule extends Rule {
    private paragraphStart = '\t\u2014 ';
    private paragraphRegexp = /(?:^|\n)\s*[\u002D|\u2010|\u2013]\s?/gmu;

    public override apply(value: string): string {
        let match;
        while (match = this.paragraphRegexp.exec(value)) {
            const nv = value.slice(0, match.index + (match.index == 0 ? 0 : 1));
            value = nv + this.paragraphStart + value.slice(match.index + match[0].length);
        }
        return value;
    }
}
