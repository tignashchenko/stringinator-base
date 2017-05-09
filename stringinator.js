const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  // hint: use _.reject
  // Your code goes here
};

const hasChar = function(str, target) {
  // hint: use _.some
  // Your code goes here
};

const isOnlyDigits = function(str) {
  // Your code goes here
};

const filterToOnlyDigits = function(str) {
  let result = '';
  const strArr = str.split('');
  _.filter(strArr, function(element) {
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
  // hint: use truncateString above
  // Your code goes here
};

const countChars = function(str) {
  const strArr = str.split('');
  return _.reduce(strArr, function(allChars, char) {
    if(char in allChars) {
      allChars[char]++;
    } else {
      allChars[char] = 1;
    }
    return allChars;
  }, {});
};

const dedup = function(str) {
  // Your code goes here
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
