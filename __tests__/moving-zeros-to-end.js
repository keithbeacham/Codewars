const moveZeros = require("../src/moveZeros");

/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/

describe("moveZeros", () => {
  test("given [], returns []", () => {
    expect(moveZeros([])).toEqual([]);
  });
  test("given [0,1], returns [1,0]", () => {
    expect(moveZeros([0, 1])).toEqual([1, 0]);
  });
  test('given [false,1,0,1,2,0,1,3,"a"], returns [false,1,1,2,1,3,"a",0,0]', () => {
    expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])).toEqual([
      false,
      1,
      1,
      2,
      1,
      3,
      "a",
      0,
      0,
    ]);
  });
});
