function isitaevenNumber(number, result) {
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
      console.log(i);
    }
  }
  return result;
}
