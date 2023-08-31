/**
 * This code was refactored and reviewed by @TheOriginalArab, @Hands-on-robotics, & @ekatie.
 * This function takes in an array and a callback function and outputs a new array created with the callback function.
 * @param {array} array - Input array.
 * @param {callback function} callback - Callback function to apply to array.
 * @returns {array} results - The pushed results of the callback function.
 */

const map = function(array, callback) {
  const results = [];
  for (const element of array) {
    results.push(callback(element));
  }
  return results;
};

/*
//Test case 1: Map to first letter
const words = ["ground", "control", "to", "major", "tom", "dragons"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t", "d"]);

//Test case 2: Map to lengths
const numbers = [1, 22, 333, 4444, 55555];
const lengths = map(numbers, num => num.toString().length);
assertArraysEqual(lengths, [1, 2, 3, 4, 5]);

//Test case 3: Map to capitalize
const lowercaseWords = ["hello", "my", "dragon", "friend"];
const capitalize = map(lowercaseWords, (word) => word.toUpperCase());
assertArraysEqual(capitalize, ["HELLO", "MY", "DRAGON", "FRIEND"]);
*/