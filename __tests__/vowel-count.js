const getCount = require("../src/getCount");

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

describe("getCount", () => {
  test("given '', returns 0", () => {
    expect(getCount("")).toBe(0);
  });
  test("given 'aeiou', returns 5", () => {
    expect(getCount("aeiou")).toBe(5);
  });
  test("given 'abracadabra', returns 5", () => {
    expect(getCount("abracadabra")).toBe(5);
  });
});
