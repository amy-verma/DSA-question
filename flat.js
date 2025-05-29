function flatten(arr){
    let result=[];
    for(let item of arr){
        if(Array.isArray(item)){
            result=result.concat(flatten(item))
        }else{
            result.push(item)
        }
    }
    return result
}
console.log(flatten([2,[7,[5,[8]]]]))