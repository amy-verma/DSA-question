// let x="i am amit"
function firstcaps(str){
  let word=str.split(" ");
  let res="";
  for(let i=0;i<word.length;i++){
    res+=word[i].charAt(0).toUpperCase()+word[i].slice(1)+" "
  }
  return res
}
console.log(firstcaps("i am amit"))