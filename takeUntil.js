/**
 * This function takes an array and adds its values to a new array until a certain condition input using a callback function is met.
 * @param {array} inputArray - Array to iterate through until condition is met.
 * @param {callback function} condition - Function that calculates whether certain condition for stopping is met.
 * @returns - A new array with all the elements of the input array before the stopping condition was met.
 */

const takeUntil = function(inputArray, condition) {

  const slicedArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (condition(inputArray[i])) {
      break;
    }
    slicedArray.push(inputArray[i]);
  }
  return slicedArray;
};

module.exports = takeUntil;