function isPalindrome(x){
    let str=x.toString();
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str[left]!==str[right]) return false
        left++
        right--
        
    }
    return true
}
console.log(isPalindrome("MadaM"))

//////////////////////////////////////////////////////////

function plaindrome(str){
    let revStr=str.toString().split("").reverse().join("")
    return str.toString()===revStr
}
console.log(plaindrome(121))