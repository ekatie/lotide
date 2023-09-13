const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {

  it("returns the letter positions (indecies) of each letter that occurs in the input string", () => {
    assert.deepEqual(letterPositions("lighthouse in the house"), {l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12]});
  });

  it("returns [1] for the e in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it("returns [2, 3] for the l in 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

});