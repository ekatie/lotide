const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log("✅👍😁🥳 Assertion Passed: " + [actual] + " === " + [expected]);
  } else {
    console.log("❌👎😢💩 Assertion Failed: " + [actual] + " !== " + [expected]);
  }
};

assertEqual(32,17);
assertEqual(1,1);
assertEqual("Lighthouse","Bootcamp");
assertEqual("hey","hey");