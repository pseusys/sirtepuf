import { Rule } from '../primitives';

export class DashReplaceRule extends Rule {
    private commonShortDash = '\u2010';
    private commonLongDash = '\u2014';

    private shortDashRegexp = /\s[\u002D|\u2010|\u2013]\s/gmu;
    private longDashRegexp = /\S[\u002D|\u2014|\u2013]\S/gmu;

    public override apply(value: string): string {
        let match;
        while (match = this.shortDashRegexp.exec(value))
            value = value.slice(0, match.index + 1) + this.commonLongDash + value.slice(match.index + 2);
        while (match = this.longDashRegexp.exec(value))
            value = value.slice(0, match.index + 1) + this.commonShortDash + value.slice(match.index + 2);
        return value;
    }
}
