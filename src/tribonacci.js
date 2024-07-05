function tribonacci(signature, n) {
  if (n < signature.length) {
    return signature.slice(0, n);
  }
  if (n > signature.length) {
    const nextNum = tribonacci(signature, --n)
      .slice(-3)
      .reduce((acc, current) => acc + current, 0);
    signature.push(nextNum);
  }
  return signature;
}

module.exports = tribonacci;
