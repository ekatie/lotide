const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe("#countOnly", () => {

  it("returns count of value in array if it occurs in the object", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    let result = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.strictEqual(result["Jason"], 1);
  });

  it("returns count of value in array if it occurs in the object", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    let result = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.strictEqual(result["Karima"], undefined);
  });

  it("returns count of value in array if it occurs in the object", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    let result = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.strictEqual(result["Fang"], 2);
  });

  it("returns count of value in array if it occurs in the object", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    let result = countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.strictEqual(result["Agouhanna"], undefined);
  });

});