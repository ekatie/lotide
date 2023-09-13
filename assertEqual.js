/**
 * This function compares the actual output and expected output of other functions to test whether they are functioning as intended. It prints the result to the console.
 * @param {primitive value} actual - Actual result output of the function.
 * @param {primitive value} expected - Expected result output of the function.
 */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅👍😁🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌👎😢💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;