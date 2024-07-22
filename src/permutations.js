function permutations(string) {
  const output = [];

  nextPermutation(string, 0, []);
  return output.sort();

  function nextPermutation(string, index, permutation) {
    if (index >= string.length) {
      const thisPermutation = permutation.join("");
      if (!output.includes(thisPermutation)) {
        output.push(thisPermutation);
      }
      return true;
    }
    for (let i = 0; i < string.length; i++) {
      if (!permutation[i]) {
        permutation[i] = string[index];
        if (nextPermutation(string, index + 1, permutation)) {
          permutation[i] = "";
        }
      }
    }
    return true;
  }
}

module.exports = permutations;
