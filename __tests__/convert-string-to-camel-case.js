const toCamelCase = require("../src/toCamelCase");

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

describe("toCamelCase", () => {
  test("given '', returns ''", () => {
    expect(toCamelCase("")).toBe("");
  });
  test("given 'the_stealth_warrior', returns ''", () => {
    expect(toCamelCase("the_stealth_warrior")).toBe("theStealthWarrior");
  });
  test("given 'The_stealth-warrior', returns 'TheStealthWarrior'", () => {
    expect(toCamelCase("The_stealth-warrior")).toBe("TheStealthWarrior");
  });
  test("given 'A-B-C', returns 'ABC'", () => {
    expect(toCamelCase("A-B-C")).toBe("ABC");
  });
});
