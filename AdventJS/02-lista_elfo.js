const carta = 'bici coche           balon _playstation    bici coche peluche';

function listGifts(carta) {
    const listaFinal = {};

    let ordenarLista = carta.split(' ').filter(regalo => regalo);
    console.log(ordenarLista)
    let filtrarRegalos = ordenarLista.filter(regalo => Object.values(regalo).indexOf('_') === -1);
    let cantidadRegalos = filtrarRegalos.forEach(el => listaFinal[el] = listaFinal[el] + 1 || 1);

    return listaFinal;
}

const regalos = listGifts(carta);

console.log(regalos);