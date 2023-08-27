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

// const flatten = function(inputArray) {
//   let outputArray = [];

//   for (let i = 0; i < inputArray.length; i++) {
//     if (Array.isArray(inputArray[i]) === true) {
//       outputArray.push(...inputArray[i]);
//     }
//     else if (Array.isArray(inputArray[i]) !== true) {
//       outputArray.push(inputArray[i]);
//     }
//   }
//   return outputArray;
// };

const flatten = function(inputArray) {
  return inputArray.flat();
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);