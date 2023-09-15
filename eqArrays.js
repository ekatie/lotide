/**
 * This function compares 2 arrays are returns true or false based on whether there is a perfect match.
 * @param {array} arrayOne - First array, to be compared with second
 * @param {array} arrayTwo - Second array, to be compared with first
 * @returns - True if the arrays match, or False if they do not
 */

const eqArrays = function(arrayOne, arrayTwo) {

  if (arrayOne.length != arrayTwo.length) {
    return false;
  }

  // Loop through arrays and check if elements match
  for (let i = 0; i < arrayOne.length; i++) {

    // If there are nested arrays
    if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
      if (!eqArrays(arrayOne[i], arrayTwo[i])) {
        return false;
      }

      // Otherwise compare element values
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  };
  return true;
};

module.exports = eqArrays;