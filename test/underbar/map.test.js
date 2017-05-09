const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = [1, 4, 9, 16, 25];
    expect(_.map(arr, element => element * element)).toEqual(result);
  });
});
