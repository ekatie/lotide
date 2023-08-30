const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅👍😁🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌👎😢💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 *This function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
 * @param {array} string takes in a string to count
 * @returns {object} returns an object containing letter counts
 */

const countLetters = function(string) {
  const letterCounts = {};

  for (const char of string) {
    if (char !== " ") {
      if (!letterCounts[char]) {
        letterCounts[char] = 0;
      }

      letterCounts[char]++;
    }
  }

  return letterCounts;
};

// console.log(countLetters("lighthouse in the house"));

// test code
// let string = "lighthouse in the house";
// let expected = {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// };

// let letterCount = countLetters(string, {'l': 1, 'i': 2, 'h': 4, 'z': undefined});

// assertEqual(letterCounts['l'], 1);
// assertEqual(letterCounts['i'], 2);
// assertEqual(letterCounts['h'], 4);
// assertEqual(letterCounts['z'], undefined);