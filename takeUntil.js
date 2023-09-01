/**
 * This function takes and array and adds its values to a new array until a certain condition input using a callback function is met.
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


// test examples
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);