/**
 * This function taken in an array and an object, and returns a count of only the array values that occur in the object.
 * @param {array} allItems - List of items
 * @param {object} itemsToCount - Items to include in count
 * @returns - Count of counted items
 */

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (!itemsToCount[item]) {
      continue;
    }

    if (!results[item]) {
      results[item] = 0;
    }

    results[item]++;
  }
  return results;
};

module.exports = countOnly;