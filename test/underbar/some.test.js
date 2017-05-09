const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(_.some(numbers, element => element % 2 !== 0)).toEqual(true);
  });

  it('returns false if no number is odd', () => {
    const evenNumbers = [2, 4, 6, 8, 10];
    expect(_.some(evenNumbers, element => element % 2 !== 0)).toEqual(false);
  });
});
