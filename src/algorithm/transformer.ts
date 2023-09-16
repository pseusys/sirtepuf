import { Mode, Rule } from "./primitives";
import { DashReplaceRule } from "./rules/dash_replace";
import { ParagraphRule } from "./rules/new_paragraph";

const allRules = [DashReplaceRule, ParagraphRule];

export class Transformer {
    private rules: Array<Rule> = Array();

    constructor(rules: Array<new () => Rule> = allRules, private mode: Mode = Mode.Plain) {
        for (let rule of rules) this.rules.push(new rule());
    }

    public transform(raw: string): string {
        return this.rules.reduce((value, rule) => rule.apply(value), raw);
    }
}
