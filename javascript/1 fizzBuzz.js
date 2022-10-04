/*
Reto #0
EL FAMOSO "FIZZ BUZZ"
Dificultad: FÁCIL

Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
- Múltiplos de 3 por la palabra "fizz".
- Múltiplos de 5 por la palabra "buzz".
- Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
*/

for (let i = 1; i <= 100; i++) {
    const divisiblePor3 = i % 3 === 0;
    const divisiblePor5 = i % 5 === 0;

    if(divisiblePor3 && divisiblePor5) {
        console.log(`fizzBuzz!!!`)
    } else if (divisiblePor3) {
        console.log(`fizz`)
    } else if (divisiblePor5) {
        console.log(`buzz`)
    } else {
        console.log(i)
    }
    
}