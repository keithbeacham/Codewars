const solution = require("../src/solution");

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

describe("solution", () => {
  test("given -1, returns 0", () => {
    expect(solution(-1)).toBe(0);
  });
  test("given 4, returns 3", () => {
    expect(solution(4)).toBe(3);
  });
  test("given 6, returns 8", () => {
    expect(solution(6)).toBe(8);
  });
  test("given 10, returns 23", () => {
    expect(solution(10)).toBe(23);
  });
});
