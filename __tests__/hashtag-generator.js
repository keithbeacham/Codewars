const generateHashtag = require("../src/generateHashtag");

/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

describe("generateHashtag", () => {
  test("given '', returns false", () => {
    expect(generateHashtag("")).toBe(false);
  });
  test("given '   ', returns false", () => {
    expect(generateHashtag("   ")).toBe(false);
  });
  test("given '   a', returns '#A'", () => {
    expect(generateHashtag("   a")).toBe("#A");
  });
  test("given 'Codewars', returns '#Codewars'", () => {
    expect(generateHashtag("Codewars")).toBe("#Codewars");
  });
  test("given 'Do We have A Hashtag', returns '#DoWeHaveAHashtag'", () => {
    expect(generateHashtag("Do We have A Hashtag")).toBe("#DoWeHaveAHashtag");
  });
});
