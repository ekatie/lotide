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

  it("returns true if there are nested objects that match", () => {
    assert.deepEqual(eqObjects({a: {z: 1}, b: 2}, {a: {z: 1}, b: 2}), true);
  });

  it("returns true if there are multiple levels of nested objects that match", () => {
    assert.deepEqual(eqObjects({a: {z: 1, c: 3, d: {da: 0, db: 2, dc: {dca: 1}}}, b: 2}, {a: {z: 1, c: 3, d: {da: 0, db: 2, dc: {dca: 1}}}, b: 2}), true);
  });

  it("returns false if there are nested objects that do not match", () => {
    assert.deepEqual(eqObjects({a: {y: 0, z: 1}, b: 2}, {a: {z: 1}, b: 2}), false);
  });

  it("returns false if there are nested objects that do not match", () => {
    assert.deepEqual(eqObjects({a: {y: 0, z: 1}, b: 2}, {a: 1, b: 2}), false);
  });

});