// 6.	Potencias y raíces. Solicita un número y muestra su cuadrado, cubo y raíz cuadrada usando Math.pow() y Math.sqrt()

console.log("Ejercicio 4(6.)");
document.write("<h3>Ejercicio 4 - Potencias y raíces</h3>");

let numero;

do {
    numero = parseFloat(prompt("Ingrese un número:"));
    if (isNaN(numero)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (isNaN(numero));

const cuadrado = Math.pow(numero, 2);
const cubo = Math.pow(numero, 3);
const raizCuadrada = Math.sqrt(numero);

// Salida de datos
console.log("Número ingresado: " + numero);
console.log("Cuadrado: " + cuadrado + "\nCubo: " + cubo + "\nRaíz cuadrada: " + raizCuadrada);
document.write(`<p><b>Número ingresado:</b> ${numero}<br>Cuadrado: ${cuadrado}<br>Cubo: ${cubo}<br>Raíz cuadrada: ${raizCuadrada}</p>`);