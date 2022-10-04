/*
Reto #2
LA SUCESIÓN DE FIBONACCI
Dificultad: DIFÍCIL

Enunciado: Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
0, 1, 1, 2, 3, 5, 8, 13...
*/

let a0 = 0;
let a1 = 1;

const lista = [];
for (let i = 1; i <= 50; i++) {
    lista.push(i);
}

lista.forEach(() => {
    console.log(a0)
    let fib = a0 + a1;
    a0 = a1
    a1 = fib 
})

