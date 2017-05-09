const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const numbers = [1, 3, 5, 2, 3, 1, 7, 3, 1, 5, 5];
    const result = [1, 3, 5, 2, 7];
    expect(_.uniq(numbers)).toEqual(result);
  });
});
