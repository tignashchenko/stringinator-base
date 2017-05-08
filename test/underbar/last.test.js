const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr[arr.length - 1];
    expect(_.last(arr)).toEqual(result);
  });

  it('returns the last 2 elements of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = [4, 5];
    expect(_.last(arr, 2)).toEqual(result);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = [1, 2, 3, 4, 5];
    expect(_.last(arr, 7)).toEqual(result);
  });
});
