function solution(text, markers) {
  let outputText = text.replace(/ *$/, "");
  markers.forEach((marker) => {
    const regEx = new RegExp(" *\\" + marker + ".*", "gi");
    outputText = outputText.replaceAll(regEx, "");
  });
  return outputText.replaceAll(/ +\n/g, "\n");
}

module.exports = solution;
