function capitalWord(sentence){
    let words=sentence.split(" ");
    let word="";
    for(let i=0;i<words.length;i++){
        word +=words[i].charAt(0).toUpperCase()+words[i].slice(1)+" "
        
    }
    return word.trim()
}
console.log(capitalWord("i am amit"))