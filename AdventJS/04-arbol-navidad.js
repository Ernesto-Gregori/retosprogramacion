function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    let copa = '';
    let piso = '';
    
    for(let i = 0; i < height; i++) {
        for(let j = height - 1; j > i; j--) {
            copa += '_';
        }
        
        for (let k = 0; k <= i; k++) {
            copa += '*';
        }
        for (let k = 1; k <= i; k++) {
            copa += '*';
        }
        
        for(let q = height; q > i + 1; q--) {
            copa += '_';
        }
        for(let e = 0; e <= i; e++ ){
            if(e === 1) {
                break;
            }
            copa += '\n';
        }
        //console.log(copa)
    }

    for(let i = 0; i < 2; i++) {
        for(let k = height; k > i; k--) {
            if(k === 1) {
                break;
            }
            piso += '_'
        }

        for (let k = 0; k <= i; k++) {
            if(k === 1) {
                break;
            }
            piso += "#";
        }
        
        for(let q = height; q > i ; q--) {
            if(q === 1) {
                break;
            }
            piso += "_";
        }
        for(let e = 0; e === i; e++ ){
            if(e === 1) {
                break;
                
            }
            piso += '\n';
        }
    }
    let arbol = copa + piso;
    
    return arbol;
    
  }

const resultado = createXmasTree(5);
console.log(resultado);