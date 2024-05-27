function filterWordsByLetters(wordArray, letters) {
  return wordArray.flatMap((sentence) => {
    const wordsInSentence = sentence.split(" ");
    return wordsInSentence.filter((word) => {
      for (let letter of letters) {
        if (word.includes(letter)) {
          return true;
        }
      }
      return false;
    });
  });
}
