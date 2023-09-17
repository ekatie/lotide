const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {

  it("returns a count of each letter in a string", () => {
    const string = "lighthouse in the house";
    assert.deepEqual(countLetters(string), {
      l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,
    });
  });

  it("returns the count for the indicated letter (by index) in a string", () => {
    const string = "lighthouse in the house";
    const letterCount = countLetters(string, {'l': 1, 'i': 2, 'h': 4, 'z': undefined});
    assert.deepEqual(letterCount['l'], 1);
  });

  it("returns the count for the indicated letter (by index) in a string", () => {
    const string = "lighthouse in the house";
    const letterCount = countLetters(string, {'l': 1, 'i': 2, 'h': 4, 'z': undefined});
    assert.deepEqual(letterCount['h'], 4);
  });

  it("returns undefined when a letter does not occur in a string", () => {
    const string = "lighthouse in the house";
    const letterCount = countLetters(string, {'l': 1, 'i': 2, 'h': 4, 'z': undefined});
    assert.deepEqual(letterCount['z'], undefined);
  });

});