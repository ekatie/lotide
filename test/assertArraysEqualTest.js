const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

let testArray1 = [1, "hi", "5", 7];
let testArray2 = [1, "hi", "5", 7];

// call function
assertArraysEqual(testArray1, testArray2);