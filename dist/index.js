const readlineSync = require('readline-sync');
const calcularFactorial = require('./factorial.js');
const calcularCombinatoria = require('./combinaciones.js');
const calcularAbsoluto = require('./valorAbsoluto.js');
const calcularPromedio = require('./promedio.js');
const calcularPermutaciones = require('./permutaciones.js');
const calcularPotencia = require('./potenciacion.js');
const cargarMenuDeOpciones = () => {
    const menuOpciones = ['Factorial', 'Combinatoria', 'Valor absoluto', 'Promedio', 'Permutaciones', 'potenciacion', 'Cerrar sesion', 'Autores del programa'];
    const opcionSeleccionada = readlineSync.keyInSelect(menuOpciones, 'Que deseas calcular?');
    return menuOpciones[opcionSeleccionada];
};
const iniciarPrograma = () => {
    let programaActivo = true;
    while (programaActivo === true) {
        let opcionSeleccionada = cargarMenuDeOpciones();
        opcionSeleccionada = opcionSeleccionada === undefined ? 'cerrar sesion' : opcionSeleccionada;
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
        else if (opcionSeleccionada.toLowerCase() === 'valor absoluto') {
            console.clear();
            const n = readlineSync.questionInt('Introduzca el numero ');
            const valorAbsoluto = calcularAbsoluto(n);
            console.log(`El valor absoluto de ${n} es ${valorAbsoluto}`);
        }
        else if (opcionSeleccionada.toLowerCase() === 'promedio') {
            console.clear();
            let ingresandoCantidades = true;
            let cantidades = [];
            let counter = 0;
            let promedio = 0;
            do {
                console.clear();
                let inputCantidades = readlineSync.question(`${counter > 0 ? 'ingresar siguiente cantidad ' : 'ingresar cantidad '}`);
                cantidades.push(parseInt(inputCantidades));
                console.clear();
                if (cantidades.length >= 2) {
                    let siguienteProceso = readlineSync.questionInt(`[1] Calcular promedio | [2] Ingresar otra cantidad > `);
                    ingresandoCantidades = siguienteProceso === 1 ? false : true;
                }
                counter += 1;
            } while (ingresandoCantidades);
            console.clear();
            promedio = calcularPromedio(...cantidades);
            cantidades.forEach(cantidad => console.log(`Cantidad ${cantidad}`));
            console.log(`El promedio de las cantidades es: ${promedio}`);
        }
        else if (opcionSeleccionada.toLowerCase() === 'permutaciones') {
            // limpiar consola
            console.clear();
            const n = readlineSync.questionInt('Introduzca el valor de N : Observaciones totales ');
            const x = readlineSync.questionInt('Introduzca el valor de X : Numero de elementos seleccionados ');
            if (x > n) {
                console.log('El numero de elementos seleccionados no puede ser mayor que el numero de observaciones totales');
                continue;
            }
            const numeroDeCombinaciones = calcularPermutaciones(n, x);
            console.log(numeroDeCombinaciones);
        }
        if (opcionSeleccionada.toLowerCase() === 'potenciacion') {
            // limpiar consola
            console.clear();
            // calcular factorial 
            const n = readlineSync.questionInt('Introduzca el valor de N : numero ');
            const x = readlineSync.questionInt('Introduzca el valor de X : potencia ');
            if (x >= 0 && x % 2 !== 0) {
                console.log('La potencia debe ser un numero entero positivo');
                continue;
            }
            const potencia = calcularPotencia(n, x);
            console.log(`El numero ${n} elevado a la potencia ${x} es igual a ${potencia}`);
        }
        else if (opcionSeleccionada.toLowerCase() === 'autores del programa') {
            console.clear();
            console.log(`Estudiantes: Zuzej Crespo, Samuel Mosquera, Jesus Castillo `);
        }
        else if (opcionSeleccionada.toLowerCase() === 'cerrar sesion') {
            console.log('cerrando sesion...');
            programaActivo = false;
        }
    }
};
iniciarPrograma();
