/**
 * This function takes in two arrays, compares their values and prints to the console to indicate whether they match or not.
 * @param {array} arrayOne - First array to compare
 * @param {array} arrayTwo - Second array to compare
 * @returns Results of comparison - whether the arrays match or not.
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

const assertArraysEqual = function(inputArrayOne, inputArrayTwo) {
  if (eqArrays(inputArrayOne, inputArrayTwo) === false) {
    console.log("The input arrays do not match.");
  } else if (eqArrays(inputArrayOne, inputArrayTwo) === true) {
    console.log("The input arrays match.");
  }
};

// test arrays
// let testArray1 = [1,"hi","5",7];
// let testArray2 = [1,"hi","5",7];

// // call function
// assertEqualArrays(testArray1,testArray2);