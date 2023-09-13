/**
 * This function takes in an array and flattens (combines) any nested arrays, returning an array without nested arrays. Single array deep only.
 * @param {array} inputArray 
 * @returns A flattened version of the original array.
 */

const flatten = function(inputArray) {
  return inputArray.flat();
};

module.exports = flatten;

/*code without using flat method:
const flatten = function(inputArray) {
  let outputArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i]) === true) {
      outputArray.push(...inputArray[i]);
    }
    else if (Array.isArray(inputArray[i]) !== true) {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}; */