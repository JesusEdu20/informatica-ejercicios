const readlineSync = require('readline-sync');
const calcularFactorial = require('./factorial.js');
const calcularCombinatoria = require('./combinaciones.js');
const cargarMenuDeOpciones = () => {
    const menuOpciones = ['Factorial', 'Combinatoria'];
    const opcionSeleccionada = readlineSync.keyInSelect(menuOpciones, 'Que deseas calcular?');
    return menuOpciones[opcionSeleccionada];
};
const iniciarPrograma = () => {
    let programaActivo = true;
    while (programaActivo === true) {
        const opcionSeleccionada = cargarMenuDeOpciones();
        if (opcionSeleccionada.toLowerCase() === 'factorial') {
            // limpiar consola
            console.clear();
            // calcular factorial 
            const n = readlineSync.questionInt('Introduzca el numero ');
            if (n < 0) {
                console.log('El numero no puede ser negativo');
                continue;
            }
            const factorialCalculado = calcularFactorial(n);
            console.log(`El factorial del numero ${n} es ${factorialCalculado}`);
        }
        else if (opcionSeleccionada.toLowerCase() === 'combinatoria') {
            // limpiar consola
            console.clear();
            const n = readlineSync.questionInt('Introduzca el valor de N : Observaciones totales ');
            const x = readlineSync.questionInt('Introduzca el valor de X : Numero de elementos seleccionados ');
            if (x > n) {
                console.log('El numero de elementos seleccionados no puede ser mayor que el numero de observaciones totales');
                continue;
            }
            const numeroDeCombinaciones = calcularCombinatoria(n, x);
            console.log(numeroDeCombinaciones);
        }
        else if (opcionSeleccionada.toLowerCase() === 'cancel') {
            console.log('cerrando sesion...');
            programaActivo = false;
        }
    }
};
iniciarPrograma();
