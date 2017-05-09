const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const names = ['Olga', 'Volodymyr', 'Taras', 'Bogdan'];
    expect(_.contains(names, 'Volodymyr')).toEqual(true);
  });

  it('returns false if an array does not contain the target', () => {
    const names = ['Olga', 'Volodymyr', 'Taras', 'Bogdan'];
    expect(_.contains(names, 'Tim')).toEqual(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const superHeroes = {
      hero1: 'Batman',
      hero2: 'Spider Man',
      hero3: 'Daredevil',
      hero4: 'Iron Man'
    };
    expect(_.contains(superHeroes, 'Daredevil')).toEqual(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const superHeroes = {
      hero1: 'Batman',
      hero2: 'Spider Man',
      hero3: 'Daredevil',
      hero4: 'Iron Man'
    };
    expect(_.contains(superHeroes, 'Hulk')).toEqual(false);
  });
});
