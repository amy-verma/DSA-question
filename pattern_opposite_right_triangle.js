let row=5;
let pattern="";
for(let i=row;i>=0;i--){
    for(let j=i;j>=1;j--){
        pattern +="*";
    }
    pattern +="\n";
}
console.log(pattern)