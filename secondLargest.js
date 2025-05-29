function secondHighest(arr){
    let max1=-Infinity
    let max2=-Infinity
    if(arr[0]>arr[1]){
        max1=arr[0];
        max2=arr[1]
    }else{
        max1=arr[1];
        max2=arr[0]
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max1){
            max2=max1;
            max1=arr[i]
        }else if(arr[i]>max2){
            max2=arr[i]
        }
    }
    return max2
}
console.log(secondHighest([23,2,3,4,5,6]))
// ------------------------------------

function secondLargest1(arr){
    let largest=-1
    let secondlargest=-1
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondlargest=largest;
            largest=arr[i]
        }else if(arr[i] !=largest && arr[i] >secondlargest){
            secondlargest=arr[i]
        }
    }
    return secondlargest
}
console.log(secondLargest1([12,52,63,23]))