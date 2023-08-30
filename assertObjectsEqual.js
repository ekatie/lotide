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

const eqObjects = function(object1, object2) {

  // Check if both objects have the same number of keys
  if (Object.keys(object1).length === Object.keys(object2).length) {

    // Compare key values for each object, both for arrays and not arrays
    for (const key in object1) {

      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

/**
 * This function prints out a message to indicate whether a function's actual object output matches the expected object output.
 * @param {object} actual - Actual object output of function.
 * @param {object} expected - Expected object output of function.
 */

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    console.log(`✅👍😁🥳 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqObjects(actual, expected) === true) {
    console.log(`❌👎😢💩 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};