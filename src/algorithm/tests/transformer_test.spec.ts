import { Transformer } from '../transformer';

describe('All rules combined', () => {
  let transformer: Transformer;
  const testText = '-Я ему кричу: \'Ну да, я дебил\'! А он подходит ко мне и говорит: "Да ты - дурак, а не "дебил", блять". Вот я его и ударил.';
  const expected = '\t— Я ему кричу: «Ну да, я дебил»! А он подходит ко мне и говорит: «Да ты — дурак, а не “дебил”, блять». Вот я его и ударил.';

  beforeEach(() => {
    transformer = new Transformer();
  });

  it('test all rules together', () => {
    const replaced = transformer.transform(testText);
    expect(replaced).toEqual(expected);
  });
});
