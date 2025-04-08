let rows=5;
let pattern="";
for(let i=0;i<=5;i++)
{
    for(let j=5;j>i;j--){
pattern +=" "
    }
for(let k=1;k<=((2*i)-1);k++){
    pattern +="*"
}
pattern +="\n"
}
console.log(pattern)