const permutations = require("../src/permutations");

/*
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

*/

describe("permutations", () => {
  test("given 'a', returns 'a'", () => {
    expect(permutations("a")).toEqual(["a"]);
  });
  test("given 'ab', returns ['ab', 'ba']", () => {
    expect(permutations("ab")).toEqual(["ab", "ba"]);
  });
  test("given 'abc', returns ['abc','acb','bac','bca','cab','cba']", () => {
    expect(permutations("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ]);
  });
  test("given 'aabb', returns ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']", () => {
    expect(permutations("aabb")).toEqual([
      "aabb",
      "abab",
      "abba",
      "baab",
      "baba",
      "bbaa",
    ]);
  });
});
