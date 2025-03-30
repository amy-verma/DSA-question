function isPrime(num){
    if(num<2) return false;
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i===0){
            return false
        }
    }
    return true
}

function getPrime(index){
    let primes=[];
    for(let i=0;i<=index;i++){
        if(isPrime(i)) primes.push(i)
    }
    return primes;
}
console.log(getPrime([100]))