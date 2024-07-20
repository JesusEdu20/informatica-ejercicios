function potencia(n:number, p:number) {
    let potencia = n;
    for (let i = 1; i < p; i++) {
        potencia *= n;
    }
    return potencia
}
module.exports = potencia