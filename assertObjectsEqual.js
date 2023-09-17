const eqArrays = require('./eqArrays');
const eqObjectss = require('./eqObjects');
const assertEqual = require('./assertEqual');

/**
 * This function prints out a message to indicate whether a function's actual object output matches the expected object output.
 * @param {object} actual - Actual object output of function.
 * @param {object} expected - Expected object output of function.
 */

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    console.log(`✅👍😁🥳 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌👎😢💩 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;