/**
 * This function removes the first index (head) of the input array and returns the rest.
 * @param {array} array - Input array.
 * @returns - The tail end of the array (all but the first index value).
 */

const tail = function(array) {
  let arrayTail = array.slice(1);
  return arrayTail;
};

module.exports = tail;