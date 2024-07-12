const domainName = require("../src/domainName");

/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

describe("domainName", () => {
  test("given 'http://github.com/carbonfive/raygun', returns 'github'", () => {
    expect(domainName("http://github.com/carbonfive/raygun")).toBe("github");
  });
  test("given 'www.xakep.ru', returns 'xakep'", () => {
    expect(domainName("www.xakep.ru")).toBe("xakep");
  });
  test("given 'http://www.erics.com/raygun', returns 'erics'", () => {
    expect(domainName("http://www.erics.com/raygun")).toBe("erics");
  });
  test("given 'rhzd1aq7t5stf.co', returns 'rhzd1aq7t5stf'", () => {
    expect(domainName("rhzd1aq7t5stf.co")).toBe("rhzd1aq7t5stf");
  });
  test("given 'https://github.com/carbonfive', returns 'github'", () => {
    expect(domainName("https://github.com/carbonfive")).toBe("github");
  });
});
