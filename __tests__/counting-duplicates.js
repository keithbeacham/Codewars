const duplicateCount = require("../src/duplicateCount");

/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice
*/

describe("duplicateCount", () => {
  test("given '', returns 0", () => {
    expect(duplicateCount("")).toBe(0);
  });
  test("given 'a', returns 0", () => {
    expect(duplicateCount("a")).toBe(0);
  });
  test("given 'abcde', returns 0", () => {
    expect(duplicateCount("abcde")).toBe(0);
  });
  test("given 'aa', returns 1", () => {
    expect(duplicateCount("aa")).toBe(1);
  });
  test("given 'aabbcde', returns 2", () => {
    expect(duplicateCount("aabbcde")).toBe(2);
  });
  test("given 'abab', returns 2", () => {
    expect(duplicateCount("abab")).toBe(2);
  });
  test("given 'abbAB', returns 2", () => {
    expect(duplicateCount("abbAb")).toBe(2);
  });
  test("given 'aA11', returns 2", () => {
    expect(duplicateCount("aA11")).toBe(2);
  });
  test("given 'ABBA', returns 2", () => {
    expect(duplicateCount("ABBA")).toBe(2);
  });
  test("given 'Indivisibilities', returns 2", () => {
    expect(duplicateCount("Indivisibilities")).toBe(2);
  });
  test("given 'abcdefghijklmnopqrstuvwxyzbaaAAB', returns 2", () => {
    expect(duplicateCount("abcdefghijklmnopqrstuvwxyzbaaAAB")).toBe(2);
  });
});
