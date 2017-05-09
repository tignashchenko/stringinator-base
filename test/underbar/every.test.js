const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(_.every(numbers)).toEqual(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const oddNumbers = [1, 3, 5, 7, 9];
      expect(_.every(oddNumbers, element => element % 2 !== 0)).toEqual(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(_.every(numbers, element => element % 2 !== 0)).toEqual(false);
    });
  });
});
