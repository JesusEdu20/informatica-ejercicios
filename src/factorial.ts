function obtenerFactorial(n:number){
    let factorial =  n;
    for(let i = 1; i<n; i++){
        factorial*= n-i
    }
    return factorial
}

module.exports = obtenerFactorial