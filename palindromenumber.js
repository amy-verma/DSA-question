const isPalindrome=function(x){
    return x=== +x.toString().split("").reverse().join("");
}
const res=isPalindrome(121);
console.log(res)



//////////////////////////////////////////////////////////

function plaindrome(str){
    let revStr=str.toString().split("").reverse().join("")
    return str.toString()===revStr
}
console.log(plaindrome(121))