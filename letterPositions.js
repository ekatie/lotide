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

/**
 * This function will return all the indices (zero-based positions) in the string where each character is found.
 * @param {string} sentence takes in a string to count the position of letters
 * @returns object containing the letters of the string and the location of each letter at their respective indices.
 */
const letterPositions = function(sentence) {
  const results = {};

  for (let index = 0; index < sentence.length; index++) {
    const char = sentence[index];

    if (char !== " ") {
      if (!results[char]) {
        results[char] = [index];
      } else if (results[char]) {
        results[char].push(index);
      }
    }
  }
  return results;
};

// test code
// console.log(letterPositions("lighthouse in the house"))
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);