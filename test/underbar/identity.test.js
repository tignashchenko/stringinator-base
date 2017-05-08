const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toEqual(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(15)).toEqual(15);
  });

  it('returns the same array if given an array', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(_.identity(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it('returns the same object if given an object', () => {
    const obj = {a: 1, b: 2, c:3};
    expect(_.identity(obj)).toEqual({a:1, b:2, c:3});
  });
});
