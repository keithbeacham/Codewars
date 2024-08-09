const solution = require("../src/stripComments");

/*
DESCRIPTION:

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

describe("stripComments", () => {
  test("given '', [] returns ''", () => {
    expect(solution("", [])).toBe("");
  });
  test("given 'aa bb cc  ', [] returns 'aa bb cc'", () => {
    expect(solution("aa bb cc  ", [])).toBe("aa bb cc");
  });
  test("given 'aa bb\n#cc dd', [] returns 'aa bb\n'", () => {
    expect(solution("aa bb\n#cc dd", ["#"])).toBe("aa bb\n");
  });
  test("given 'aa + bb\ncc - dd\nee * ff', ['+', '-', '*'] returns 'aa\ncc\nee'", () => {
    expect(solution("aa + bb\ncc - dd\nee * ff", ["+", "-", "*"])).toBe(
      "aa\ncc\nee"
    );
  });
  test("given 'OCW#+TlMOcrI YgMLsQfjE*!Jb\n HfAc#-FrSOYQY!z~fLa* Ewxbc~Az \nQhg@Z!FnP\n', [] returns 'OCW#+TlMOcrI YgMLsQfjE*!Jb\n HfAc#-FrSOYQY!z~fLa* Ewxbc~Az \nQhg@Z!FnP'", () => {
    expect(
      solution(
        "OCW#+TlMOcrI YgMLsQfjE*!Jb\n HfAc#-FrSOYQY!z~fLa* Ewxbc~Az \nQhg@Z!FnP\n",
        []
      )
    ).toBe(
      "OCW#+TlMOcrI YgMLsQfjE*!Jb\n HfAc#-FrSOYQY!z~fLa* Ewxbc~Az\nQhg@Z!FnP\n"
    );
  });
  test("given 'P%M eeCJTDWpu% NhHOa\\mmuX \nqejEpi/c-Yk*wcgaq*U/\nz%XOYawT!dzgfLbbj#ZGs\nFJUFnzM$lnJ-oBtMs@s u@uQFxMnkmi', ['!'] returns 'P%M eeCJTDWpu% NhHOa\\mmuX\nqejEpi/c-Yk*wcgaq*U/\nz%XOYawT\nFJUFnzM$lnJ-oBtMs@s u@uQFxMnkmi'", () => {
    expect(
      solution(
        "P%M eeCJTDWpu% NhHOa\\mmuX \nqejEpi/c-Yk*wcgaq*U/\nz%XOYawT!dzgfLbbj#ZGs\nFJUFnzM$lnJ-oBtMs@s u@uQFxMnkmi",
        ["!"]
      )
    ).toBe(
      "P%M eeCJTDWpu% NhHOa\\mmuX\nqejEpi/c-Yk*wcgaq*U/\nz%XOYawT\nFJUFnzM$lnJ-oBtMs@s u@uQFxMnkmi"
    );
  });
  test('given "MfJAD^zC#a\\x\nlTm\npn+pYFDJcQZJQbZK+JkZ\n ", ["*","#","%","\\","$","-","~","+","^","!","@","/"] returns "MfJAD\nlTm\npn\n"', () => {
    expect(
      solution("MfJAD^zC#a\\x\nlTm\npn+pYFDJcQZJQbZK+JkZ\n ", [
        "*",
        "#",
        "%",
        "\\",
        "$",
        "-",
        "~",
        "+",
        "^",
        "!",
        "@",
        "/",
      ])
    ).toBe("MfJAD\nlTm\npn\n");
  });
  test('given "uIlbrq \nrl~Y+yDGrlu/fD\nuderHF", ["#","-","%","/","!","@","*","$","+","^","\\"] returns "uIlbrq\nrl~Y\nuderHF"', () => {
    expect(
      solution("uIlbrq \nrl~Y+yDGrlu/fD\nuderHF", [
        "#",
        "-",
        "%",
        "/",
        "!",
        "@",
        "*",
        "$",
        "+",
        "^",
        "\\",
      ])
    ).toBe("uIlbrq\nrl~Y\nuderHF");
  });
  test("given 'apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!'] returns 'apples, pears\ngrapes\nbananas'", () => {
    expect(
      solution("apples, pears # and bananas\ngrapes\nbananas !apples", [
        "#",
        "!",
      ])
    ).toBe("apples, pears\ngrapes\nbananas");
  });
});
