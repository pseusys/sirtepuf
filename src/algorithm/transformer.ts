import { Mode, Rule } from './primitives';
import { DashReplaceRule } from './rules/dash_replace';
import { ParagraphRule } from './rules/new_paragraph';
import { QuoteReplaceRule } from './rules/quote_replace';

const ALL_RULES = [DashReplaceRule, ParagraphRule, QuoteReplaceRule];

export class Transformer {
    private rules: Array<Rule> = Array();

    constructor(rules: Array<new () => Rule> = ALL_RULES, private mode: Mode = Mode.Plain) {
        for (let rule of rules) this.rules.push(new rule());
    }

    public transform(raw: string): string {
        return this.rules.reduce((value, rule) => rule.apply(value), raw);
    }
}
