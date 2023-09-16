import { ParagraphRule } from '../rules/new_paragraph';

describe('ParagraphRule rule', () => {
  let paragraphReplace: ParagraphRule;

  beforeEach(() => {
    paragraphReplace = new ParagraphRule();
  });

  it('should set first paragraph start', () => {
    const testLine = '\u002D Этот символ должен заменяться на вот этот \u2014 символ';
    const replaced = paragraphReplace.apply(testLine);
    const expected = '\t\u2014 Этот символ должен заменяться на вот этот \u2014 символ';
    expect(replaced).toEqual(expected);
  });

  it('should set any paragraph start', () => {
    const testLine = 'текст.\n\u2010Этот символ должен заменяться на вот этот \u2014 символ';
    const replaced = paragraphReplace.apply(testLine);
    const expected = 'текст.\n\t\u2014 Этот символ должен заменяться на вот этот \u2014 символ';
    expect(replaced).toEqual(expected);
  });

  it('should set starts of two paragraphs', () => {
    const testLine = '\u2013Этот символ должен заменяться на вот этот \u2014 символ\n\u2010 А этот символ должен заменяться на вот этот \u2014 символ';
    const replaced = paragraphReplace.apply(testLine);
    const expected = '\t\u2014 Этот символ должен заменяться на вот этот \u2014 символ\n\t\u2014 А этот символ должен заменяться на вот этот \u2014 символ';
    expect(replaced).toEqual(expected);
  });
});