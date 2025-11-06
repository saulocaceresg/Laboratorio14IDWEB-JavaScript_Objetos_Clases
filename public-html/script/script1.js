// Redondeo de precios. Pide un número decimal que represente el precio de un producto y que muestre:
// • Redondeo hacia abajo
// • Redondeo hacia arriba
// • Redondeo normal Tip: prueba con el número 12.49 y 12.5

document.write("<h3>Ejercicio 1 - Redondeo de Precios</h3>");
console.log("Ejercicio 1(3.)");

let precio; // Variable precio

// Ciclo do while para validar el precio
do {
    precio = parseFloat(prompt("Ingrese el precio del producto (número decimal):"));
    if (precio % 1 === 0 || precio <= 0 || isNaN(precio)) { // Debe ser un número. No debe ser entero, no menor a 0
        alert("DATOS NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (isNaN(precio) || precio <= 0 || precio % 1 === 0);

const redondeoAbajo = Math.floor(precio);
const redondeoArriba = Math.ceil(precio)
const redondeoNormal = Math.round(precio);

// Salida de datos
console.log("Precio ingresado: " + precio);
console.log("Precios redondeados:\nRedondeo abajo: " + redondeoAbajo + "\nRedondeo arriba: " + redondeoArriba + "\nRedondeo normal: " + redondeoNormal);

document.write(`<p><b>Precio ingresado:</b> ${precio}<br>Redondeado hacia abajo: ${redondeoAbajo}<br>Redondeado hacia arriba: ${redondeoArriba}<br>Redondeado normal: ${redondeoNormal}</p>`);