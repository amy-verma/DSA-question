function hammingDistence(x,y){
    if(x.length!=y.length){
        console.log("String must be of same length")
    }
    let distence=0;
    for(i=0;i<x.length;i++){
        if(x[i]!==y[i]){
            distence++
        }
    }
    return distence
}
console.log(hammingDistence("hello","halle")) 