function reverse(str) {
  let words = str.split(" ");
  let res = "";
  for (let i = 0; i < words.length; i++) {
    let reversedWord = "";
    for (let j = words[i].length - 1; j >= 0; j--) {
      reversedWord += words[i][j];
    }
    res += reversedWord;
    if (i !== words.length - 1) {
      res += " ";
    }
  }
  return res;
}
console.log(reverse("hi how are")); //output //ih woh era
