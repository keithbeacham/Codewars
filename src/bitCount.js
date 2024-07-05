function bitCount(inputInteger) {
  const array = inputInteger.toString(2).match(/1/g);
  return array ? array.length : 0;
}

module.exports = bitCount;
