function highAndLow(numbers) {
  const lowNum = numbers.split(" ").sort((a, b) => a - b)[0];
  const highNum = numbers.split(" ").sort((a, b) => b - a)[0];
  return `${highNum} ${lowNum}`;
}

module.exports = highAndLow;
