function truncate(str,maxLength){
    if(str.length>maxLength){
        return str.slice(0,maxLength)+"..."
    }else{
        return str
    }
}
console.log(truncate("Subscribe to Amit",9))

