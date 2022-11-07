const letter = ")muñeca( consola bici";

function isValid(letter) {
    const listaRegalos = letter.split(" ");
    const filtroParentesis = listaRegalos.filter(regalo => regalo.indexOf("(") !== -1);
    const comprobarParentesis = JSON.stringify(filtroParentesis);

    if(comprobarParentesis.includes('(') && comprobarParentesis.includes(')')) {

        const noIncluyeRegalo = comprobarParentesis.includes("()");
        const parentesisInvertidos = comprobarParentesis.indexOf('(') !== 2;
        if(noIncluyeRegalo || parentesisInvertidos) {
            return false
        } 
        return true
    }

    return false
}

const resultado = isValid(letter);

console.log(resultado)