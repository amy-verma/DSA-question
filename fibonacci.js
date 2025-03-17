function fibo(n){
  let res=[0,1];
  for(i=2;i<n;i++){
      res.push(res[i-1]+res[i-2]);
  }
  return res[n-1]
}
console.log(fibo(5))