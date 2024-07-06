function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3) {
      sum += i % 5 ? 0 : i;
    } else {
      sum += i;
    }
  }
  return sum;
}

module.exports = solution;
