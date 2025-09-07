function longestString(s){
  if(!s) return {length:0,substr:""}
  let end=0;
  let start=0;
  let maxlength=0;
  let substr="";
  let uniqueElem=new Set();
  while(end<s.length){
    if(!uniqueElem.has(s[end])){
      uniqueElem.add(s[end])
      
      if(uniqueElem.size>maxlength){
        maxlength=uniqueElem.size;
        substr=s.slice(start,end+1)
      }
      end++;
      
    }else{
      uniqueElem.delete(s[start])
      start++;
    }
  }
  return {length:maxlength,substr}
}
console.log(longestString("abcabcbb"))