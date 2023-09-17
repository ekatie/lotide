/**
 * This function takes in two arrays and removes the values in array 2 from array 1.
 * @param {array} source - Array to modify
 * @param {array} itemsToRemove - Array with values to remove from source array
 * @returns - A new array with the values remaining in the source array after the indicated values have been removed.
 */

const without = function(source, itemsToRemove) {
  let editedSource = [];

  for (let value of source) {
    let removeValue = false;
    for (let item of itemsToRemove) {
      if (value === item) {
        removeValue = true;
      }
    }
    if (removeValue === false) {
      editedSource.push(value);
    }
  }
  return editedSource;
};

module.exports = without;