const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = true;
    expect(_.isArrayLike(arr)).toEqual(result);
  });

  it('returns true for an array-like object', () => {
    const obj = {length: 0, a: 1, b: 2};
    const result = true;
    expect(_.isArrayLike(obj)).toEqual(result);
  });

  it('returns false for a non-array-like object', () => {
    const obj = {a: 1, b: 2, c: 3};
    const result = false;
    expect(_.isArrayLike(obj)).toEqual(result);
  });
});
