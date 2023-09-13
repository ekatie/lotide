const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {

  it("returns [1, 2, 3, 4, 5, 6] when passed [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns [1, 'hi', 'there', 4, 'boo!', 6] when passed [1, 2, ['hi', 'there'], 'boo!', [6]]", () => {
    assert.deepEqual(flatten([1, 2, ['hi', 'there'], 'boo!', [6]]), [1, 2, 'hi', 'there', 'boo!', 6]);
  });

  it("returns ['my', 'name', 'is', ['miss'], ['Katie', 'Kucsera']] when passed [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten(['my', 'name', 'is', ['miss'], ['Katie', 'Kucsera']]), ['my', 'name', 'is', 'miss', 'Katie', 'Kucsera']);
  });

});