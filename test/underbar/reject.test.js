const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const number = [1, 2, 3, 4, 5];
    const result = [2, 4];
    expect(_.reject(number, element => element % 2 !== 0)).toEqual(result);
  });

  it('rejects null values from an object', () => {
    const obj = {
      'name': 'Taras',
      'HR diploma': null,
      'age': 26,
      'spouse': null
    };
    const result = ['Taras', 26];
    expect(_.reject(obj, value => value === null)).toEqual(result);
  });
});
