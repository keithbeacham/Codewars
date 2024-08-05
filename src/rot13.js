function rot13(message) {
  return message
    .split("")
    .map((letter) => {
      let charcode = letter.charCodeAt(0) - 0x0041;
      if (charcode >= 0x0000 && charcode <= 0x0019) {
        console.log("char is capital>", charcode);
        return String.fromCharCode(((charcode + 13) % 26) + 0x0041);
      }
      if (charcode >= 0x0020 && charcode <= 0x0039) {
        console.log("char is lower case>", charcode);
        return String.fromCharCode(((charcode - 0x0020 + 13) % 26) + 0x0061);
      }
      return letter;
    })
    .join("");
}

module.exports = rot13;
