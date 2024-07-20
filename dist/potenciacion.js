function potencia(n, p) {
    let potencia = n;
    for (let i = 1; i < p; i++) {
        potencia *= n;
    }
    return potencia;
}
module.exports = potencia;
