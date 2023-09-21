/**
 * This function takes in an array and flattens (combines) any nested arrays, returning an array without nested arrays. Single array deep only.
 * @param {array} inputArray 
 * @returns A flattened version of the original array.
 */

const flatten = function(inputArray) {
  let outputArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      outputArray.push(...inputArray[i]);
    }
    else {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
};

module.exports = flatten;