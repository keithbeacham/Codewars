function domainName(url) {
  //   let hostIndex = 0;
  //   switch (url.slice(0, 5)) {
  //     case "http:":
  //       hostIndex = 7;
  //       break;
  //     case "https":
  //       hostIndex = 8;
  //       break;
  //   }
  //   let domain = url.slice(hostIndex).split(".");
  //   return domain[0] === "www" ? domain[1] : domain[0];
  return url
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .split(".")[0];
}

module.exports = domainName;
