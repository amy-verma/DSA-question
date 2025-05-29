function target(num,target){
    for(let i=0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            if(num[i]===num[j]) return [i,j]
        }
    }
}
console.log(target([2,7,11,15],9))