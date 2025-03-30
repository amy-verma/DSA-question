function nonRepeating(str){
    let unique="";
    for(let char of str){
        if(unique.indexOf(char)===-1){
            unique +=char
        }
    }
    return unique;
}
console.log(nonRepeating("amitt verma"))