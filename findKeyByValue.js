/**
 * This function takes in an object and a value, then searches the object for the key of the indicated value.
 * @param {object} inputObject - Object to search through
 * @param {primitive value} value - Value to search object for
 * @returns The key of the value as it occurs in the object.
 */

const findKeyByValue = function(inputObject, value) {
  for (let key in inputObject) {
    if (inputObject[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;