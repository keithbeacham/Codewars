function generateHashtag(str) {
  if (str) {
    const output =
      "#" +
      str
        .split(" ")
        .map((element) =>
          element ? element[0].toUpperCase() + element.slice(1) : ""
        )
        .join("");
    return output === "#" || output.length > 140 ? false : output;
  }
  return false;
}

module.exports = generateHashtag;
