const tail = require('../tail');
const assert = require('chai').assert;
const {expect} = require('chai');

describe("#tail", () => {

  it("returns a new array with one less length than the original array", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words).length, words.length - 1);
  });

  it("returns a new array without modifying the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    expect(words).to.have.lengthOf(3);
  });

  it("returns a new array with index 0 being the value of the previous arrays index 1 value", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words)[0], words[1]);
  });

});