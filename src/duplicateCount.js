function duplicateCount(text) {
  const matches = text.toLowerCase().match(/([a-z0-9])(?=.*\1)/g);
  let count = 0;
  if (matches) {
    matches.forEach((element, index, array) => {
      if (!array.includes(element, index + 1)) {
        count++;
      }
    });
  }
  return count;
}

module.exports = duplicateCount;
