function largestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';
    for (let word of words) {
      if (word.length > longest.length) {
        longest = word;
      }
    }
    return longest;
  }
  console.log(largestWord('I am an Indian'));
  