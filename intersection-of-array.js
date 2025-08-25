const arr1 = ["a", "b", "c", "b"];
const arr2 = ["x", "y", "b", "b"];


function intersection(a1,a2){
  let result=[];
  let arr2copy=[...a2];
  
  for(let item of a1){
    const index=arr2copy.indexOf(item);
    if(index !==-1){
      result.push(item)
      arr2copy.splice(index,1)
    }
  }
  return result
}
console.log(intersection(arr1,arr2))