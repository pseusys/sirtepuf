import { Mode, Rule } from "./primitives";

export class Transformer {
    private rules: Array<Rule> = Array();

    constructor(rules: Array<new () => Rule> = Array(), private mode: Mode = Mode.Plain) {
        for (let rule of rules) this.rules.push(new rule());
    }

    public transform(raw: string): string {
        return this.rules.reduce((value, rule) => rule.apply(value), raw);
    }
}
