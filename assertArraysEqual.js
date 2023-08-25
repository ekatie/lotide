const eqArrays = function(arrayOne,arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    } else {
      continue
    }
  }
  return true
}

const assertEqualArrays = function(inputArrayOne,inputArrayTwo) {
  if (eqArrays(inputArrayOne,inputArrayTwo) === false) {
    console.log("The input arrays do not match.")
  } else if (eqArrays(inputArrayOne,inputArrayTwo) === true) {
    console.log("The input arrays match.")
  }
}

// test arrays
// let testArray1 = [1,"hi","5",7];
// let testArray2 = [1,"hi","5",7];

// // call function
// assertEqualArrays(testArray1,testArray2);