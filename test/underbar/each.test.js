const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = [1, 2, 3, 4, 5];
    let count = 0;
    _.each(arr, function(element, index, array) {
      expect(element).toEqual(array[index]);
      count += 1;
    });
    expect(count).toEqual(5);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrayLikeObj = {
      length: 2,
      1: 'T',
      2: 'I'
    };
    let count = 0;
    _.each(arrayLikeObj, function(element, index, iteratedArrayLikeObj) {
      expect(element).toEqual(iteratedArrayLikeObj[index]);
      count += 1;
    });
    expect(count).toEqual(2);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      name: 'Hack Reactor',
      location: 'San Francisco',
      'programming language': 'JavaScript'
    };
    let count = 0;
    _.each(obj, function(value, key, iteratedObj) {
      expect(value).toEqual(iteratedObj[key]);
      count += 1;
    });
    expect(count).toEqual(3);
  });
});
