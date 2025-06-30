function nonRepeating(str) {
  let obj = {};
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  let result = [];
  for (let char of str) {
    if (obj[char] === 1) {
      result.push(char);
    }
  }
  return result;
}
console.log(nonRepeating("google"));
