import { Rule } from '../primitives';

export class QuoteReplaceRule extends Rule {
    private outerOpenQuote = '\u00AB';
    private outerCloseQuote = '\u00BB';
    private innerOpenQuote = '\u201E';
    private innerCloseQuote = '\u201C';

    private openQuoteRegexp = /(^|\n|\s)[\u201E|\u00AB|\u201E|\u0022|\u0027]/gmu;
    private closeQuoteRegexp = /\S[\u201C|\u00BB|\u201F|\u0022|\u0027]($|\n|\s|\p{P})/gmu;
    private innerQuoteRegexp = /(\u00AB[\S|\s]+)(\u00AB[\s|\S]+\u00BB)([\S|\s]+\u00BB)/gmu;

    public override apply(value: string): string {
        let match;
        while (match = this.openQuoteRegexp.exec(value))
            value = value.slice(0, match.index + match[1].length) + this.outerOpenQuote + value.slice(match.index + match[0].length);
        while (match = this.closeQuoteRegexp.exec(value))
            value = value.slice(0, match.index + 1) + this.outerCloseQuote + value.slice(match.index + match[0].length - match[1].length);
        while (match = this.innerQuoteRegexp.exec(value)) {
            const innserStart = match.index + match[1].length
            const innserEnd = match.index + match[1].length + match[2].length 
            value = value.slice(0, innserStart) + this.innerOpenQuote + value.slice(innserStart + 1, innserEnd - 1) + this.innerCloseQuote + value.slice(innserEnd);
        }
        return value;
    }
}
