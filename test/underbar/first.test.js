const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr[0];
    expect(_.first(arr)).toEqual(result);
  });

  it('returns the first 2 elements of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = [1, 2];
    expect(_.first(arr, 2)).toEqual(result);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const arr = [1, 2, 3, 4, 5];
    result = [1, 2, 3, 4, 5];
    expect(_.first(arr, 7)).toEqual(result);
  });
});
