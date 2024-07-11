const findOutlier = require("../src/findOutlier");

/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples

[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)*/

describe("findOutlier", () => {
  test("given [1,2,3], returns 2", () => {
    expect(findOutlier([1, 2, 3])).toBe(2);
  });
  test("given [2, 4, 0, 100, 4, 11, 2602, 36], returns 11", () => {
    expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
  });
  test("given [160, 3, 1719, 19, 11, 13, -21], returns 160", () => {
    expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
  });
});
