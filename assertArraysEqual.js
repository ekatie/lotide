const eqArrays = require('./eqArrays');

/**
 * This function takes in two arrays, compares their values and prints to the console to indicate whether they match or not.
 * @param {array} inputArrayOne - First array to compare
 * @param {array} inputArrayTwo - Second array to compare
 * Print out results of comparison - whether the arrays match or not.
 */

const assertArraysEqual = function(inputArrayOne, inputArrayTwo) {
  if (!eqArrays(inputArrayOne, inputArrayTwo)) {
    console.log("The input arrays do not match.");
  } else {
    console.log("The input arrays match.");
  }
};

module.exports = assertArraysEqual;