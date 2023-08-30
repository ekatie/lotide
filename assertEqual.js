/**
 * This function compares the actual output and expected output of other functions to test whether they are functioning as intended. It print the result to the console.
 * @param {primitive value} actual 
 * @param {primitive value} expected 
 */

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅👍😁🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌👎😢💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual(32,17);
// assertEqual(1,1);
// assertEqual("Lighthouse","Bootcamp");
// assertEqual("hey","hey");