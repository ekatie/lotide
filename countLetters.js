const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅👍😁🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌👎😢💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/**
 * 
 * @param {string} inputString - Sentence to count letters in
 * @returns - Count of each letter the occurs in the string
 */
const countLetters = function(inputString) {
  let letterCount = {};

  for (const letter of inputString) {
    if (!letterCount[letter]) {
      letterCount[letter] = 0;
    }
    letterCount[letter] += 1;
  }

  return letterCount;
};

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

// let result = countLetters(string, {'l': 1, 'i': 2, 'h': 4, 'z': undefined});

// assertEqual(result['l'], 1);
// assertEqual(result['i'], 2);
// assertEqual(result['h'], 4);
// assertEqual(result['z'], undefined);