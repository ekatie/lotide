const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅👍😁🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌👎😢💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    } else {
      continue;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  //if input objects are arrays, compare them and return true or false depending on whether they match or not
  if (Array.isArray(object1) && Array.isArray(object2)) {
    return eqArrays(object1, object2);
  }

  //if input objects are objects

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key of Object.keys(object1)) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// test primitive values
// const shirtObject = {color: "red", size: "medium"};
// const anotherShirtObject = {size: "medium", color: "red"};
// assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

// const longSleeveShirtObject = {size: "medium", color: "red", sleeveLength: "long"};
// assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

// test arrays
// const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
// const anotherMultiColorShirtObject = {size: "medium", colors: ["red", "blue"]};
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject = {size: "medium", colors: ["red", "blue"], sleeveLength: "long"};
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false