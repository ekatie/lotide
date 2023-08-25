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

const without = function(source, itemsToRemove) {
  let editedSource = [];

  for (let value of source) {
    let removeValue = false;
    for (let item of itemsToRemove) {
      if (value === item) {
        removeValue = true;
      }
    }
    if (removeValue === false) {
      editedSource.push(value);
    }
  }
  return editedSource;
};

assertArraysEqual(without([1, 2, "3"], [1]), [2, "3"]);

// tests
// let sourceArray = [1, 2, 3];
// let itemsToRemoveArray = [2];

// assertArraysEqual(without(sourceArray, itemsToRemoveArray));