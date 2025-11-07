// 7.	Conversión de grados a radianes y de radianes a grados. Crea una función gradosARadianes(grados) que convierta ángulos de grados a radianes y muestre el seno y coseno del ángulo
// Tip: usa la fórmula radianes = grados * (π / 180).
// Crea una función radianesAGrados(radianes) que convierta ángulos de radianes a grados
// Tip: usa la fórmula grados=radianes * (180/ π)

console.log("Ejercicio 5(7.)");
document.write("<h3>Ejercicio 5 - Conversión</h3>");

let grados;

const gradosARadianes = grados => grados * (Math.PI / 180);

// Ciclo do while para verificar entrada de datos
do {
    grados = parseFloat(prompt("Ingrese un ángulo en grados para convertir a radianes:"));
    if (isNaN(grados)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.")
    }
} while (isNaN(grados));

// Convertido
const radianes = gradosARadianes(grados);
const seno = Math.sin(radianes);
const coseno = Math.cos(radianes);

// Salida de datos
console.log("Ángulo ingresado (grados): " + grados + "°");
console.log("Ángulo convertido a radianes: " + radianes.toFixed(4));
console.log("Seno: " + seno + "\nCoseno: " + coseno.toFixed(4));
document.write(`<p><b>Ángulo ingresado (grados):</b> ${grados}°<br>Ángulo convertido a radianes: ${radianes.toFixed(4)}<br>Seno: ${seno.toFixed(4)}<br>Coseno: ${coseno.toFixed(4)}</p>`);