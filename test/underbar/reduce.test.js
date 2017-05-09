const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = 15;
    expect(_.reduce(numbers, (acc, curr) => acc + curr), 0).toEqual(result);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const numbers = [1, 2, 3, 4, 5];
    const result = 15;
    expect(_.reduce(numbers, (acc, curr) => acc + curr)).toEqual(result);
  });
});
