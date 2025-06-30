// ----------------------------------
function longestSunStr(s) {
  if (!s) return { length: 0, substr: "" };
  let end = 0;
  let start = 0;
  let maxLength = 0;
  let substr = "";
  let uniqueElement = new Set();
  while (end < s.length) {
    if (!uniqueElement.has(s[end])) {
      uniqueElement.add(s[end]);

      if (uniqueElement.size > maxLength) {
        maxLength = uniqueElement.size;
        substr = s.slice(start, end + 1);
      }
      end++;
    } else {
      uniqueElement.delete(s[start]);
      start++;
    }
  }
  return { length: maxLength, substr };
}
console.log(longestSunStr("abcabcbb"));
