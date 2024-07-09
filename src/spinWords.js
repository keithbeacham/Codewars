function spinWords(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length > 4) {
        return word.split("").reverse().join("");
      } else return word;
    })
    .join(" ");
}

module.exports = spinWords;
