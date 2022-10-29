const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {

    const evaluacionColorOveja = oveja => oveja.color === 'rojo';
    const evaluacionLetraA = oveja => oveja.name.toLowerCase().indexOf('a'.toLowerCase()) > -1;
    const evaluacionLetraN = oveja => oveja.name.toLowerCase().indexOf('n'.toLowerCase()) > -1;

    return ovejas.filter(evaluacionColorOveja).filter(evaluacionLetraA).filter(evaluacionLetraN);
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);