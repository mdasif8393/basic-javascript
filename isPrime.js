function isPrime(n){
    for(var i=2;i<n;i++){
    if(n%i==0){
        return "Not a pprime number";
    }
}
    return "Is a prime number";
}
console.log(isPrime(117));