const rot13 = require("../src/rot13");

/*
DESCRIPTION:

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

describe("rot13", () => {
  test("given a, returns n", () => {
    expect(rot13("a")).toBe("n");
  });
  test("given n, returns a", () => {
    expect(rot13("n")).toBe("a");
  });
  test("given A, returns N", () => {
    expect(rot13("A")).toBe("N");
  });
  test("given test, returns grfg", () => {
    expect(rot13("test")).toBe("grfg");
  });
  test("given TesT., returns GrfG.>", () => {
    expect(rot13("TesT.>")).toBe("GrfG.>");
  });
});
