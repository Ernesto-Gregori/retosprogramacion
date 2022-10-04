/*
Reto #3
¿ES UN NÚMERO PRIMO?
Dificultad: MEDIA

Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
Hecho esto, imprime los números primos entre 1 y 100.
*/

const lista = [];
for(i = 1; i <= 100; i++) {
    lista.push(i);
}

lista.forEach(num => {
    if(isPrime(num)){
        console.log(num);
    }
})

function isPrime(num) {
    if (num < 2) {
        return false
    }

    for (let i = 2 ; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }

    return true
}
