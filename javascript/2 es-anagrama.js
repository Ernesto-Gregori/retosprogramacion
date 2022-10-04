/*
Reto #1
¿ES UN ANAGRAMA?
Dificultad: MEDIA

Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
NO hace falta comprobar que ambas palabras existan.
Dos palabras exactamente iguales no son anagrama.
*/

const resultado = esAnagrama("Amor", "Roma")

function esAnagrama(palabra, posibleAnagrama) {
    if(palabra.toLowerCase() === posibleAnagrama.toLowerCase()) {
        return false;
    }
    return palabra.toLowerCase().split("").sort().join("") === posibleAnagrama.toLowerCase().split("").sort().join("");

}

console.log(resultado)