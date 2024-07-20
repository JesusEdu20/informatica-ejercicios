const fact = require('./factorial.js')
function permutaciones(n:number, x:number){
    const factorialN = fact(n)
    const permutaciones = factorialN/(fact(n-x))
    return permutaciones

}

module.exports = permutaciones