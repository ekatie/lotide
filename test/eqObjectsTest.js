const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

// test arrays - convert to mocha
// const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
// const anotherMultiColorShirtObject = {size: "medium", colors: ["red", "blue"]};
// assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject = {size: "medium", colors: ["red", "blue"], sleeveLength: "long"};
// assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false