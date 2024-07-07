function getCount(str) {
  const matches = str.match(/[aeiou]/g);
  return matches ? matches.length : 0;
}

module.exports = getCount;
