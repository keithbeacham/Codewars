const bitCount = require("../src/bitCount");

/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

describe("bit-counting", () => {
  test("given 0, returns 0", () => {
    expect(bitCount(0)).toBe(0);
  });
  test("given 1, returns 1", () => {
    expect(bitCount(1)).toBe(1);
  });
  test("given 1234, returns 5", () => {
    expect(bitCount(1234)).toBe(5);
  });
});
