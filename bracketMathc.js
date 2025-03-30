// let arr={[()]}
function allBraces(s){
    let stack=[];
    const bracketMap={
        ")":"(",
        "}":"{",
        "]":"[",
    };
    for(let char of s){
        if(char === "(" || char=="{" || char==="["){
            stack.push(char);
        } else{
            if (stack.length === 0 || stack.pop() != bracketMap[char]){
                return false
            }
        }
    }
    return stack.length===0;
}
console.log(allBraces("[]"))
console.log(allBraces("[{()}]"))
console.log(allBraces("[{}}]"))
console.log(allBraces("{}}]"))