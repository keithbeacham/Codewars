function duplicateCount(text) {
  let matches = text.match(/([a-z0-9])(?=.*\1)/gi);
  let count = 0;
  if (matches) {
    matches = matches.map((element) => element.toLowerCase());
    matches.forEach((element, index, array) => {
      if (!array.includes(element, index + 1)) {
        count++;
      }
    });
  }
  return count;
}

module.exports = duplicateCount;
