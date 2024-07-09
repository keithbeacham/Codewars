const spinWords = require("../src/spinWords");

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

describe("spinWords", () => {
  test("given '', returns ''", () => {
    expect(spinWords("")).toBe("");
  });
  test("given word less than 5 letters, returns same word", () => {
    expect(spinWords("abcd")).toBe("abcd");
  });
  test("given word greater than 4 letters, returns same word reversed", () => {
    expect(spinWords("abcde")).toBe("edcba");
  });
  test("given sentence, returns same sentence with words greater than 4 letters reversed", () => {
    expect(spinWords("abcde fghi jklmn")).toBe("edcba fghi nmlkj");
  });
  test("given 'Welcome', returns 'emocleW'", () => {
    expect(spinWords("Welcome")).toBe("emocleW");
  });
  test("given 'Hey fellow warriors', returns 'Hey wollef sroirraw'", () => {
    expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
  });
  test("given 'This is a test', returns 'This is a test'", () => {
    expect(spinWords("This is a test")).toBe("This is a test");
  });
});
