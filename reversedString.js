function reversedString(str){
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
      reversed +=str[i]
    }
    return reversed;
  }
  console.log(reversedString("Index"))

  // ---------------------
  function reverse(str){
    let res=""
    let n=str.split("");
    for(let i=n.length-1;i>=0;i--){
        res+=n[i]
    }
    return res
}
console.log(reverse("amit verma"))
// let str="amit verm"