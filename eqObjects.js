const eqArrays = require("./eqArrays");

/**
 * This function compares two objects and returns true if their keys and values are identical, or false if they are not.
 * @param {object} object1 - First input object to compare
 * @param {object} object2 - Second input object to compare
 * @returns - True or false based on whether the input objects are identical or not.
 */

const eqObjects = function(object1, object2) {

  // Check if both objects have the same number of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // Compare key values for each object, both for arrays and not arrays
  for (const key in object1) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  };
  return true;
};

module.exports = eqObjects;