function factorial(n){
    var result = 1;
    for(var i=1;i<=n;i++){
        result = result * i;
    }
    return result;
}
var fact=factorial(3);
console.log(fact);