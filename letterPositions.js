const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

/**
 * This function will return all the indices (zero-based positions) in the string where each character is found.
 * @param {string} sentence takes in a string to count the position of letters
 * @returns object containing the letters of the string and the location of each letter at their respective indices.
 */
const letterPositions = function(sentence) {
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    const char = sentence[index];

    if (char !== " ") {
      if (!results[char]) {
        results[char] = [index];
      } else if (results[char]) {
        results[char].push(index);
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// test code
// console.log(letterPositions("lighthouse in the house"))
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);