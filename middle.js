const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

/**
 * This function takes in an array and returns it's middle value(s) - a single value if the length is odd, or two if the length is even.
 * @param {array} inputArray - Input array.
 * @returns The value of the middle index(es).
 */

const middle = function(inputArray) {
  let middleValues = [];

  if (inputArray.length <= 2) {
    return middleValues;
  } else if (inputArray.length % 2 === 1) {
    middleValues.push(inputArray[(inputArray.length - 1) / 2]);
  } else if (inputArray.length % 2 === 0) {
    middleValues.push(...inputArray.slice((inputArray.length / 2) - 1, (inputArray.length / 2) + 1));
  }
  return middleValues;
};

module.exports = middle;
