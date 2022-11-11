let e1 = "aaabaaa";
let e2 = "mama mia en la pizzeria amam";
let e3 = "a";
let e4 = "bbdaadbb";
let e5 = "lorem ipsum dolor sit amettema tis rolod muspi merol";

function checkMirror(x) {
    const palabra = x.replace(/ /g, "");
    const numeroLetras = palabra.length;
    const cantidadLetras = numeroLetras % 2;
    
    if(cantidadLetras !== 0) {
        const l1 = Math.floor(numeroLetras / 2);
        const l2 = Math.round(numeroLetras / 2);
        const letra = palabra.replace(palabra.slice(l1, l2), ' ');
        const arrPalabras = letra.split(' ');

        if(letra === ' ') {
            return true;
        }

        if(arrPalabras[0] !== arrPalabras[1]) {
            return false
        }
    }

    return true;
}

// No Tocar
console.log(checkMirror(e1));
console.log(checkMirror(e2));
console.log(checkMirror(e3));
console.log(checkMirror(e4));
console.log(checkMirror(e5));