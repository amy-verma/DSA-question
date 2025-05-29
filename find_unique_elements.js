function Unique(str){
    let n=str.split("");
    let res="";
    for(let i=0;i<n.length;i++){
        if(!res.includes(n[i])){
            res +=n[i]
        }
    }
    return res
}
console.log(Unique("amitt"))