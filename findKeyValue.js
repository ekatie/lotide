const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅👍😁🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌👎😢💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 * This function takes in an object and a value, then searches the object for the key of the indicated value.
 * @param {object} inputObject 
 * @param {primitive value} value 
 * @returns The key of the value as it occurs in the object.
 */

const findKeyByValue = function(inputObject, value) {
  for (let key in inputObject) {
    if (inputObject[key] === value) {
      return key;
    }
  }
};

// test code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);