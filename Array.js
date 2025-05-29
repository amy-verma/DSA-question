let person={
    name:"amit",
    age:28
}
 let arr=["appla","orange","cars",person]
// console.log(arr[name].name)

//add and remove elements
// arr.push("pineapple")

// arr.pop()
// console.log(arr)
// arr.unshift("amit")
// console.log(arr)
// arr.shift()
// console.log(arr)
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

//////////////loooooping///////////////////////////
const numbers=[1,2,3,4,5]
// let res=numbers.map((i,index,array)=>{
//     // console.log(i,index,array)
//     return i+5
// })
// console.log(res)

// let res=numbers.filter((item,index,array)=>{
//     // console.log(item,index,array)
//     return item>3
// })
// let res=numbers.reduce((acc,curr)=>{
//     return acc+curr
// },2)
// console.log(res)

//some in js
// let res=numbers.some((item,index,array)=>{
//     return item>3
// })
//  console.log(res)
 
 //every in js
//  let res=numbers.every((item,index,array)=>{
//      return item>3
//  })
//  console.log(res)

//find in JS
// let res=numbers.find((item,index,array)=>{
//     return item>3
// })
// console.log(res)


//spread and rest operator

// let num1=[1,2,3,4,5,6]
// let num2=[8,9,10,11]

// const final=[...num1,...num2]//spread
// console.log(final)

//Rest Operator
// function sum(...numbers){//rest
//     return numbers
// }
// console.log(sum(num1,num2))

//CONCAT

let num1=[1,2,3,4,5,6]
let num2=["amit","sumit"]

let res=num1.concat(num2)
console.log(res)


// ---------------------------------------------
//spread and rest operator

let oldArray=["apple","banana","cherry","lichi"]
// let res=num.slice(-2)
// console.log(res)
// let newArray=oldArray.splice(1,2,"amit")
// console.log("oldArray",oldArray)
// console.log("newArray",newArray)
//Findindex
let arr=["apple","banana","cherry","lichi"]
let res=arr.findIndex((item) => item==="cherry")
console.log(res)

//FLAT
let arr=[1,[3,4],[5,5,[7,8]]]
let res=arr.flat(1)
console.log(res)

//REVERSE
let arr=[1,2,3,4,5,6]
let res=arr.reverse()
console.log(res)
//sorting
// let arr=[5,9,32,3,4,5,6]
// let res=arr.sort((a,b)=> a-b)
// console.log(res)//ascending order

let arr=[5,9,32,3,4,5,6]
let res=arr.sort((a,b)=> b-a)
console.log(res)//descending order
