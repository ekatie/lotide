/**
 * This function takes in an object and a callback function and returns the key of the value that matches the callback function condition.
 * @param {object} object - Input object to search
 * @param {callback function} callback - Condition for value to search object for.
 * @returns - String key of found value.
 */

const findKey = function(object, callback) {

  let objectKeys = Object.keys(object);

  for (let i = 0; i < objectKeys.length; i++) {
    if (callback(object[objectKeys[i]])) {
      return objectKeys[i];
    }
  }
};