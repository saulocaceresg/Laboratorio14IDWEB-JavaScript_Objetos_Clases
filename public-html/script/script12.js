// // 16.	Herencia. Crear la jerarquía Empleado - Programador - ProgramadorSenior 
// •	Empleado tiene nombre y sueldoBase 
// •	Programador añade lenguaje y método calcularSueldo() con bono del 10% 
// •	ProgramadorSenior sobreescribe calcularSueldo() con un bono del 25%
//      Tip: llama a super.calcularSueldo() desde la subclase

console.log("Ejercicio 14 (16.)");
document.write("<h3>Ejercicio 14 - Herencia (Padre, hijo, nieto)</h3>");

// Clase PADRE
class Empleado {
    #nombre;
    #sueldoBase;
    constructor(nombre, sueldoBase) {
        this.#nombre = nombre;
        this.#sueldoBase = sueldoBase;
    }
    get nombre() {
        return this.#nombre;
    }
    get sueldoBase() {
        return this.#sueldoBase;
    }
    toString() {
        return `Empleado: ${this.nombre}\nSueldo Base: S/. ${this.sueldoBase}`;
    }
}

// Clases HIJAS
class Programador extends Empleado {
    #lenguaje;
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.#lenguaje = lenguaje;
    }

    calcularSueldo() {
        let bono = 1.1;
        return this.sueldoBase * bono;
    }

    toString() {
        return `${super.toString()}\nLenguaje: ${this.#lenguaje}\nSueldo con bono (10%): S/. ${this.calcularSueldo()}`;
    }
}

// •	ProgramadorSenior sobreescribe calcularSueldo() con un bono del 25%
class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase, lenguaje);
    }
    calcularSueldo () {
        return super.calcularSueldo() * 1.25; // Se añade el bono del 25%
    }
    toString() {
        return `${super.toString().split('\nSueldo con bono')[0]}\nSueldo con bono (25%): S/. ${this.calcularSueldo()}`;
    }
}

// Salida de datos
const programador = new Programador("Saulo Cáceres", 30000, "JavaScript");
console.log(programador.toString());
document.write(`<pre style = "font-family: 'Times New Roman'">${programador.toString()}</pre>`);

const programadorSenior = new ProgramadorSenior("Perpevua", 30000, "Python");
console.log(programadorSenior.toString());
document.write(`<pre style = "font-family: 'Times New Roman'">${programadorSenior.toString()}</pre>`);
