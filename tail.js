const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅👍😁🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌👎😢💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let arrayTail = array.slice(1);
  return arrayTail;
};

// const result = tail(["Hello","Lighthouse","Labs"]);
// assertEqual(result.length,2);
// assertEqual(result[0],"Lighthouse");
// assertEqual(result[1],"Labs");

// const words = ["Yo Yo","Lighthouse","Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length,3); // original array should still have 3 elements!

// console.log(tail([]));