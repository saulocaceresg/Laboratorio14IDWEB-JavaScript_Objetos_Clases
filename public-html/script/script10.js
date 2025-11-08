// 13.	Herencia. Crear una clase Figura. Debe tener un método area() y perímetro() que las subclases Cuadrado y Triangulo deben sobrescribir. Tip: llamar a constructor de la superclase

console.log("Ejercicio 11 (13.)");
document.write("<h3>Ejercicio 11 - Herencia</h3>");

// Clase PADRE
class Figura {
    #area;
    #perímetro;
    area () {
        return this.#area;
    }
    perimetro () {
        return this.#perímetro;
    }
}

// Clases HIJAS
class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    area () {
        return this.lado * this.lado;
    }
    perimetro () {
        return this.lado * 4;
    }
}

class Triangulo extends Figura {
    constructor (base, altura, lado1, lado2, lado3) {
        super();
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    area () {
        return this.base * this.altura / 2;
    }
    perimetro () {
        return this.lado1 + this.lado2 + this.lado3;
    }
}

const cuadrado = new Cuadrado(5);

// Salida de datos
console.log("==== Cuadrado ====")
console.log("Lado del cuadrado: " + cuadrado.lado);
console.log("Área del cuadado: " + cuadrado.area() + "\nPerímetro del cuadrado: " + cuadrado.perimetro());

document.write(`<p><b>Cuadrado:</b><br>Lado del cuadrado: ${cuadrado.lado}<br>Área del cuadrado: ${cuadrado.area()}<br>Perímetro del cuadrado: ${cuadrado.perimetro()} </p>`);

const triangulo = new Triangulo(5, 5, 2, 3, 3);
console.log("==== Triángulo ====")
console.log("Base del triángulo: " + triangulo.base + "\nAltura del triángulo: " + triangulo.altura + "\nLados: " + triangulo.lado1 + ", " + triangulo.lado2 + ", " + triangulo.lado3);
console.log("Área del triángulo: " + triangulo.area() + "\nPerímetro del triángulo: " + triangulo.perimetro());

document.write(`<p><b>Triángulo:</b><br>Base del triángulo: ${triangulo.base}<br>Altura del triángulo: ${triangulo.altura}<br>Lados: ${triangulo.lado1}, ${triangulo.lado2}, ${triangulo.lado3}<br> Área del triángulo: ${triangulo.area()}<br>Perímetro del triángulo: ${triangulo.perimetro()} </p>`);