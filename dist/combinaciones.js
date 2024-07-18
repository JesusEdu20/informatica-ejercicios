const calcFactorial = require('./factorial.js');
function obtenerCombinatoria(n, x) {
    const factorialN = calcFactorial(n);
    const factorialX = calcFactorial(x);
    const combinaciones = factorialN / (factorialX * calcFactorial(n - x));
    return combinaciones;
}
module.exports = obtenerCombinatoria;
