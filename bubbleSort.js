function bubble(num){
    let n=num.length;
    for(let i=0;i<n-1;i++){
        let swapped=0;
        for(let j=0;j<n-1-i;j++){
            if(num[j]>num[j+1]){
                let temp=num[j];
                    num[j]=num[j+1]
                    num[j+1]=temp
                    swapped=1;
            }
    }
    if(!swapped) break;
}
return num
}
console.log(bubble([33,4,5,6]))