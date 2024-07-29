function moveZeros(arr) {
  let numZeros = 0;
  const output = arr.filter((element) => {
    if (element === 0) {
      numZeros++;
      return false;
    } else return true;
  });
  for (let i = 0; i < numZeros; i++) {
    output.push(0);
  }
  return output;
}

module.exports = moveZeros;
