const readlineSync = require('readline-sync');
const calcularFactorial = require('./factorial.js');
const calcularCombinatoria = require('./combinaciones.js');
const cargarMenuDeOpciones = () => {
    const menuOpciones = ['Factorial', 'Combinatoria'];
    const opcionSeleccionada = readlineSync.keyInSelect(menuOpciones, 'Que deseas calcular?');
    return menuOpciones[opcionSeleccionada];
};
const iniciarPrograma = () => {
    const opcionSeleccionada = cargarMenuDeOpciones();
    console.log(opcionSeleccionada);
    if (opcionSeleccionada.toLowerCase() === 'factorial') {
        // limpiar consola
        console.clear();
        // calcular factorial 
        const n = readlineSync.questionInt('Introduzca el numero ');
        const factorialCalculado = calcularFactorial(n);
        console.log(`El factorial del numero ${n} es ${factorialCalculado}`);
    }
    else if (opcionSeleccionada.toLowerCase() === 'combinatoria') {
        // limpiar consola
        console.clear();
        const n = readlineSync.questionInt('Introduzca el valor de N : Observaciones totales ');
        const x = readlineSync.questionInt('Introduzca el valor de X : Numero de elementos seleccionados ');
        const numeroDeCombinaciones = calcularCombinatoria(n, x);
        console.log(numeroDeCombinaciones);
    }
};
iniciarPrograma();
