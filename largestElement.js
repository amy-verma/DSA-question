function largestNUmber(arr){
    let largest=[0];
    for (let i=0;i<arr.length;i++){
        if (arr[i]> largest){
            largest=arr[i]
        }
    }
    return largest;
}
console.log(largestNUmber([33,54,79,32]))