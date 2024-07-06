const XO = require("../src/XO");

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

describe("XO", () => {
  test("given xo, returns true", () => {
    expect(XO("xo")).toBe(true);
  });
  test("given x, returns false", () => {
    expect(XO("x")).toBe(false);
  });
  test("given oOxXm, returns true", () => {
    expect(XO("oOxXm")).toBe(true);
  });
});
