/**
 * This function takes an array and returns the value for index 0.
 * @param {array} array - Input array
 * @returns - Value of index 0 (first value) in array.
 */

const head = function(array) {
  if (array === "") {
    return undefined;
  } else {
    return array[0];
  }
};

module.exports = head;