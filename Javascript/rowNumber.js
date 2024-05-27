function rowSumOddNumbers(n) {
  let result = 0;
  if (n > 1) {
    result = n * (n + 1) * n;
  }
  return result;
}

console.log(rowSumOddNumbers(42));
