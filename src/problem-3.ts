{
  type CountWordOccurrences = (sentence: string, word: string) => number;

  const countWordOccurrences: CountWordOccurrences = (sentence, word) => {
    if (word === "") return 0;

    const lowercaseSentence: string = sentence.toLowerCase();
    const lowercaseTargetWord: string = word.toLowerCase();

    const words: string[] = lowercaseSentence.split(/\W+/).filter(Boolean);

    const matchingWords: string[] = words.filter((word) => {
      return word === lowercaseTargetWord;
    });

    return matchingWords.length;
  };

  const wordOccurrences: number = countWordOccurrences(
    "I love typescript",
    "typescript"
  );

  //   console.log(wordOccurrences);
}
