const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = [1, 3, 5];
    expect(_.filter(numbers, element => element % 2 !== 0)).toEqual(result);
  });

  it('filters an object to only numeric values', () => {
    const arr = [15, 'Taras', undefined, 30, 100, null, false, true, 1000];
    const result = [15, 30, 100, 1000];
    expect(_.filter(arr, element => typeof(element) === 'number')).toEqual(result);
  });
});
