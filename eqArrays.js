const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅👍😁🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌👎😢💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function that compares 2 arrays are returns true or false based on perfect match

const eqArrays = function(arrayOne,arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    } else {
      continue
    }
  }
  return true
}

// test cases
assertEqual(eqArrays([1,2,3],[1,2,3]),true);
assertEqual(eqArrays([1,2,3],[3,2,1]),false);
assertEqual(eqArrays(["1","2","3"],["1","2","3"]),true);
assertEqual(eqArrays(["1","2","3"],["1","2",3]),false);