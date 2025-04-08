function removeUnique(str){
    let n=str.split("");
    let unique=""
    for(let i=0;i<=n.length-1;i++){
        if(!unique.includes(n[i])){
            unique +=n[i]
        }
    }
    return unique
}
console.log(removeUnique("amittt"))