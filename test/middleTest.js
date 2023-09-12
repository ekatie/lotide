const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {

  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [5] for [1, 3, 5, 7, 9]", () => {
    assert.deepEqual(middle([1, 3, 5, 7, 9]), [5]);
  });

  it("returns ['my', 'name'] for ['hello', 'there', 'my', 'name', 'is', 'katie']", () => {
    assert.deepEqual(middle(['hello', 'there', 'my', 'name', 'is', 'katie']), ['my', 'name']);
  });

  it("returns ['name'] for ['hello', 'my', 'name', 'is', 'katie']", () => {
    assert.deepEqual(middle(['hello', 'my', 'name', 'is', 'katie']), ['name']);
  });

});