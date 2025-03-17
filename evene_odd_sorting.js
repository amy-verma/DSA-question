function bubble(arr){
    let n=arr.length;
    let swapped;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
            
        }
        
    }
            return arr
}

function seperateevenodd(arr){
let even=[];
let odd=[];

for(let num of arr){
    if (num%2===0){
        even.push(num)
    }else{
        odd.push(num)
    }
}
    return {odd,even}
}
let sortedArray=bubble([4,2,5,6,1,3])
let result=seperateevenodd(sortedArray)
console.log(result)