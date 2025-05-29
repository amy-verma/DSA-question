function consecutiveOne(s){
    let count=0;
    let maxCount=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==="2"){
            count++;
            maxCount=Math.max(maxCount,count)
        }else{
            count=0
        }
    }
    return maxCount
}
console.log(consecutiveOne("10022221110"))  