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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      }
    }
  }
  return results;
};

// test code
// console.log(letterPositions("lighthouse in the house"))
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);