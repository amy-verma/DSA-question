function getVowels(str){
    let vowels=["a","e","i","o","u"]
    let count=0;
    for(let char of str.toLowerCase()){
      if(vowels.includes(char)){
        count++
      }
    }
    return count;
  }
  console.log(getVowels("Hello"))