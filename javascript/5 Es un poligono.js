/*
Reto #4
ÁREA DE UN POLÍGONO
Dificultad: FÁCIL

Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
- La función recibirá por parámetro sólo UN polígono a la vez.
- Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
- Imprime el cálculo del área de un polígono de cada tipo.
*/

class Triangulo{
    constructor(base, altura) {
        this.base = base;
        this.altura = altura
    }
    
    area() {
        return (this.base * this.altura) / 2
    }

    printArea() {
        console.log(`El area del triangulo es ${this.area()}`)
    }
    
}

class Rectangulo {
    constructor(largo, ancho) {
        this.largo = largo;
        this.ancho = ancho
    }
    
    area() {
        return this.largo * this.ancho
    }
    
    printArea() {
        console.log(`El area del rectangulo es ${this.area()}`)
    }
    
}

class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }
    
    area() {
        return this.lado * this.lado
    }
    
    printArea() {
        console.log(`El area del cuadrado es ${this.area()}`)
    }
    
}

area(new Triangulo(20.0, 5.0));
area(new Rectangulo(9.0, 15.0));
area(new Cuadrado(10.0));

function area(poligono) {
    return poligono.printArea()
}