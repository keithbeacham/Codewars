function count(string) {
  const outputObject = {};
  string.split("").forEach((letter) => {
    if (outputObject[letter]) {
      outputObject[letter]++;
    } else {
      outputObject[letter] = 1;
    }
  });
  return outputObject;
}

module.exports = count;
