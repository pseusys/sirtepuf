import { DashReplaceRule } from "../rules/dash_replace";

describe('DashReplace rule', () => {
  let dashReplace: DashReplaceRule;

  beforeEach(() => {
    dashReplace = new DashReplaceRule();
  });

  it('should replace short dashes with long ones', () => {
    const testLine = 'Этот \u002D и этот \u2010 и этот \u2013 и этот \u2014 символы должны заменяться на этот \u2014 символ';
    const replaced = dashReplace.apply(testLine);
    const expected = 'Этот \u2014 и этот \u2014 и этот \u2014 и этот \u2014 символы должны заменяться на этот \u2014 символ';
    expect(replaced).toEqual(expected);
  });

  it('should not replace short dashes inside of the words', () => {
    const testLine = 'Этот\u002Dсимвол и этот\u2010символ и этот\u2013символ и этот\u2014символ должны заменяться на этот\u2010символ';
    const replaced = dashReplace.apply(testLine);
    const expected = 'Этот\u2010символ и этот\u2010символ и этот\u2010символ и этот\u2010символ должны заменяться на этот\u2010символ';
    expect(replaced).toEqual(expected);
  });

  it('mixed test case', () => {
    const testLine = 'Этот \u002D и этот\u2013символ и этот \u2014 и этот\u2010символ должны заменяться соответственно правилам';
    const replaced = dashReplace.apply(testLine);
    const expected = 'Этот \u2014 и этот\u2010символ и этот \u2014 и этот\u2010символ должны заменяться соответственно правилам';
    expect(replaced).toEqual(expected);
  });
});
