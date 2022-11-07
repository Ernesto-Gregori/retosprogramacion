/*Para el reto de hoy vamos a manejar dos Arrays separados.
La meta es encontrar la multiplicación más grande entre dos elemento de el Array.
Los Array no están ordenado. */

// No Borrar
let a1 = [ 3, 1, 2, 8, 13, 9, 1, 1, 2, 3, 4, 10, 12, 11, 1, 1];
let a2 = [ 5, 7, 7, 7, 7, 2, 1, 2, 0];

let resultado = 0;

// Escribe tu algoritmo - guarda en resultado

function sumarArray(a1, a2) {

    const numeroMayor1 = Math.max(...a1);
    const numeroMayor2 = Math.max(...a2);

    return numeroMayor1 * numeroMayor2

}

resultado = sumarArray(a1, a2)
console.log(resultado);