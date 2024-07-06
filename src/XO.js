function XO(str) {
  const Exes = str.match(/x/gi) || [];
  const Ohs = str.match(/o/gi) || [];
  return Exes.length === Ohs.length;
}

module.exports = XO;
