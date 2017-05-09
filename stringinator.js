const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  return _.reject(str, element => element === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str, target);
};

const isOnlyDigits = function(str) {
  return _.every(str, element => !isNaN(Number(element)));
};

const filterToOnlyDigits = function(str) {
  let result = '';
  _.filter(str, function(element) {
    if(Number(element)) {
      result += element;
    }
  });
  return result;
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  if(_.isArrayLike(obj)) {
    return _.map(obj, element => truncateString(element, maxLength));
  } else {
    const strArr = [];
      for(let key in obj) {
        strArr.push(obj[key]);
      }
    return _.map(strArr, element => truncateString(element, maxLength));
  }
};

const countChars = function(str) {
  return _.reduce(str, function(allChars, char) {
    if(char in allChars) {
      allChars[char]++;
    } else {
      allChars[char] = 1;
    }
    return allChars;
  }, {});
};

const dedup = function(str) {
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};
