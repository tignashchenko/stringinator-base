const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const result = 0;
    expect(_.indexOf(arr, 'a')).toEqual(result);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const result = arr.length - 1;
    expect(_.indexOf(arr, 'e')).toEqual(result);
  });

  it('returns -1 for a missing value', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const result = -1;
    expect(_.indexOf(arr, 'q')).toEqual(result);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = ['a', 'b', 'c', 'c', 'b', 'a'];
    const result = 2;
    expect(_.indexOf(arr, 'c')).toEqual(result);
  });

  it('starts searching at the given offset', () => {
    const arr = ['a', 'b', 'c', 'c', 'b', 'a'];
    const result = 4;
    expect(_.indexOf(arr, 'b', 2)).toEqual(result);
  });

});
