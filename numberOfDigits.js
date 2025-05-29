//count number of digits
function countDigits(num){
    num=Math.abs(num);
    if(num===0) return 1
    
    let count=0;
    while(num>=1){
        count++
        num=Math.floor(num/10)
    }
    return count
}
console.log(countDigits(12345))//5

