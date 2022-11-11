// No borrar
let A = [1, 2, 3, 4, 5];
let B = [6, 7, 8, 9, 10];

let completado = false // Cambiar a true cuando este completado

// Implementación

function shuffle(arr1, arr2) {
    // Escribe tu codigo aqui
    const cartas = [...arr1, ...arr2]

    const barajarCartas = cartas.sort(() => Math.random() - 0.5)
    console.log(barajarCartas);

    return completado = true;
}

let C = shuffle(A, B);

console.log(completado);