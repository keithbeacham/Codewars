function rowSumOddNumbers(n) {
  /*
  a. there are n entires in the nth row
  b. so the total number of entries to the end of the nth row is n(n+1)/2
  c. and the total number of entries up to but not including this row is n(n-1)/2
  d. the sum of the first n odd numbers is n**2
  e. so the total sum of numbers in the nth row is (b.)**2-(a.)**2, which can be reduced to n**3.
*/
  return n ** 3;
}

module.exports = rowSumOddNumbers;
