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

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
