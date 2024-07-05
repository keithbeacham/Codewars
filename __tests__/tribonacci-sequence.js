const tribonacci = require("../src/tribonacci");

/*
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)*/

describe("tribonacci", () => {
  test("given [1,1,1],0, returns []", () => {
    expect(tribonacci([1, 1, 1], 0)).toEqual([]);
  });
  test("given [1,1,1],1, returns [1]", () => {
    expect(tribonacci([1, 1, 1], 1)).toEqual([1]);
  });
  test("given [1,1,1],4, returns [1,1,1,3]", () => {
    expect(tribonacci([1, 1, 1], 4)).toEqual([1, 1, 1, 3]);
  });
  test("given [1,1,1],5, returns [1,1,1,3,5]", () => {
    expect(tribonacci([1, 1, 1], 5)).toEqual([1, 1, 1, 3, 5]);
  });
});
