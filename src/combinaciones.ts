const calcFactorial = require('./factorial.js')

function obtenerCombinatoria(n:number, x:number){
    const factorialN = calcFactorial(n)
    const factorialX = calcFactorial(x)
    
    const combinaciones = factorialN/(factorialX * calcFactorial(n-x))
    return combinaciones
}

module.exports = obtenerCombinatoria