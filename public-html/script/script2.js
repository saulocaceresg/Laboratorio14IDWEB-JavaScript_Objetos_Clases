// 4.	Número aleatorio en un rango. Crear una función numeroAleatorio(min, max) que devuelva un número entero entre min y max (incluidos)

console.log("Ejercicio 2(3.)");
document.write("<h3>Ejercicio 2 - Número aleatorio</h3>");

let min, max;

// Ciclo do while para validar valores
do {
    do {
        min = parseFloat(prompt("Ingrese el valor mínimo del rango:"));
        if (isNaN(min)) {
            alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
        }
    } while (isNaN(min));
    
    do {
        max = parseFloat(prompt("Ingrese el valor máximo del rango:"));
        if (isNaN(max)) {
            alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
        }
    } while (isNaN(max));
    if (min >= max) {
        alert("DATOS NO VÁLIDOS: Mínimo es mayor o igual que Máximo.\nINGRESE DE NUEVO.");
    }
} while (min >= max);

// Función para generar número aleatorio en rango
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const numero = numeroAleatorio(min, max);

// Salida de datos
console.log("Número aleatorio entre " + min + " y " + max + ": " + numero);
document.write(`<p>Número aleatorio entre ${min} y ${max}: <b>${numero}</b></p>`);