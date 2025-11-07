// 9.	Calcular distancia entre dos puntos en el plano cartesiano. Dadas las coordenadas (x1, y1) y (x2, y2), calcular la distancia entre los puntos y la suma de las distancias de cada punto al origen

console.log("Ejercicio 7(9.)");
document.write("<h3>Ejercicio 7 - Distancia entre puntos</h3>");

let x1, y1, x2, y2;

const distanciaPuntos = (x1, y1, x2, y2) => Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

// Ciclos do while para verificar cooredenadas
do {
    x1 = parseFloat(prompt("Ingrese la coordenada x1:"));
    if (isNaN(x1)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
    }
} while (isNaN(x1));

do {
    y1 = parseFloat(prompt("Ingrese la coordenada y1:"));
    if (isNaN(y1)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
    }
} while (isNaN(y1));

do {
    x2 = parseFloat(prompt("Ingrese la coordenada x2:"));
    if (isNaN(x2)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
    }
} while (isNaN(x2));

do {
    y2 = parseFloat(prompt("Ingrese la coordenada y2:"));
    if (isNaN(y2)) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
    }
} while (isNaN(y2));

const distancia = distanciaPuntos(x1, y1, x2, y2);

// Salida de datos
console.log("Puntos: (" + x1 + ", " + y1 + ") y (" + x2 + ", " + y2 + ")");
console.log(distancia);
document.write(`<p><b>Distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}):</b> ${distancia.toFixed(3)}</p>`);