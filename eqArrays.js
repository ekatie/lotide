/**
 * This function compares 2 arrays are returns true or false based on whether there is a perfect match.
 * @param {array} arrayOne - First array, to be compared with second
 * @param {array} arrayTwo - Second array, to be compared with first
 * @returns - True if the arrays match, or False if they do not
 */

const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    } else {
      continue;
    }
  }
  return true;
};

module.exports = eqArrays;