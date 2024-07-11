function findOutlier(integers) {
  return integers.filter((x) => x % 2).length === 1
    ? integers.find((x) => x % 2)
    : integers.find((x) => !(x % 2));
}

module.exports = findOutlier;
