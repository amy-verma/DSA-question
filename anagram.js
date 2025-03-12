function anagram(str1,str2){
    let sortStr1=str1.split("").sort().join("");
    let sortStr2=str2.split("").sort().join("")
    return sortStr1===sortStr2
}
console.log(anagram("silent","listen"))