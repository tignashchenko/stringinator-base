const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const family = [
      {name: 'Taras', age: 26},
      {name: 'Volodymyr', age: 57},
      {name: 'Olga', age: 57},
      {name: 'Bogdan', age: 29}
    ];
    const result = [26, 57, 57, 29];
    expect(_.pluck(family, 'age')).toEqual(result);
  });
});
