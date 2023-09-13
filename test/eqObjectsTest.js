const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {

  it("returns true if the keys and values of the two input objects match", () => {
    const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
    const anotherMultiColorShirtObject = {size: "medium", colors: ["red", "blue"]};
    assert.deepEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });

  it("retuns false if the keys and values of the two input objects do not match", () => {
    const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
    const longSleeveMultiColorShirtObject = {size: "medium", colors: ["red", "blue"], sleeveLength: "long"};
    assert.deepEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);
  });

});