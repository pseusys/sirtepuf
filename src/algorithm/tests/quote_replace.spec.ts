import { QuoteReplaceRule } from '../rules/quote_replace';

describe('QuoteReplace rule', () => {
  let quoteReplace: QuoteReplaceRule;

  beforeEach(() => {
    quoteReplace = new QuoteReplaceRule();
  });

  it('should replace regular quotes with "paw" quotes', () => {
    const testLine = 'Этот текст "был взят" в кавычки';
    const replaced = quoteReplace.apply(testLine);
    const expected = 'Этот текст \u00ABбыл взят\u00BB в кавычки';
    expect(replaced).toEqual(expected);
  });

  it('should replace inner quotes with beautiful quotes', () => {
    const testLine = 'Этот текст "был взят \'а этот ещё в одни\' кавычки"';
    const replaced = quoteReplace.apply(testLine);
    const expected = 'Этот текст \u00ABбыл взят \u201Eа этот ещё в одни\u201C кавычки\u00BB';
    expect(replaced).toEqual(expected);
  });
});
