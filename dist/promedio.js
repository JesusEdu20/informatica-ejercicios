function promedio(...cantidades) {
    let sum = 0;
    let promedio = 0;
    for (let i = 0; i < cantidades.length; i++) {
        sum += cantidades[i];
    }
    promedio = sum / cantidades.length;
    return promedio;
}
module.exports = promedio;
