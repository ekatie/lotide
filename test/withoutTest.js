const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {

  it("returns a new array with the inidcated values removed from the original array", () => {
    const sourceArray = [1, 2, 3];
    const itemsToRemoveArray = [2];
    assert.deepEqual(without(sourceArray, itemsToRemoveArray), [1, 3]);
  });

  it("returns [2, '3'] when given [1, 2, '3'], [1]", () => {
    const sourceArray = [1, 2, 3];
    const itemsToRemoveArray = [2];
    assert.deepEqual(without(sourceArray, itemsToRemoveArray), [1, 3]);
  });

});