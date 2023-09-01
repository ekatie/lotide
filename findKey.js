/**
 * This function takes in an object and a callback function and returns the key of the value that matches the callback function condition.
 * @param {object} inputObject - Input object to search
 * @param {callback function} condition - Function to calculate condition for value to search object for.
 * @returns - String key of found value.
 */

const findKey = function(inputObject, condition) {
  for (let key in inputObject) {
    if (condition(inputObject[key])) {
      return key;
    }
  }
};