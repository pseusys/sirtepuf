export abstract class Rule {
    public abstract apply(value: string): string;
}

export enum Mode {
    Plain,
    Web
}
