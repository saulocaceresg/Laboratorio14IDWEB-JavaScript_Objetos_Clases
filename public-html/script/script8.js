// 10.	Normalización de calificaciones. Dado un arreglo de calificaciones, normalizar todos los valores al rango 0–1 dividiendo cada nota entre el máximo del arreglo
// Tip: usa el operador de propagación: Math.max(...array).

console.log("Ejercicio 8(10.)");
document.write("<h3>Ejercicio 8 - Normalización de calificaciones</h3>");

let calificaciones = [];
let nota, n = 1;

// ciclo do while para verificar notas
do {
    nota = prompt(n + "°\nIngrese una calificación entre 0 y 20 (escriba q para salir):");
    if (nota === "q") {
        break;
    }
    nota = parseFloat(nota);
    if (isNaN(nota) || nota > 20 || nota < 0) {
        alert("DATO NO VÁLIDO.\nINGRESE DE NUEVO.");
        continue;
    }
    if (!isNaN(nota) && nota >= 0 && nota <= 20) {
        calificaciones.push(nota);
    }
    n++;
} while (isNaN(nota) || nota < 0 || nota > 20 || nota !== "q");

const maximo = Math.max(...calificaciones); // Se busca el valor máximo del arreglo

// Función para normalizar calificaciones
function normalizarCalificaciones(calificaciones) {
    let normalizado = [];
    for (let i = 0; i < calificaciones.length; i++) {
        normalizado[i] = calificaciones[i] / maximo;
    }
    return normalizado;
}

const resultado = normalizarCalificaciones(calificaciones);

// Salida de datos
console.log("Calificaciones originales: " + calificaciones);
console.log("Calificaciones normalizadas: ");
for (let n of resultado) {
    console.log(n.toFixed(4));
}

document.write(`<p><b>Calificaciones originales:</b> ${calificaciones.join(", ")}</p>`);
document.write("<p><b>Calificaciones normalizadas:</b></p><ul>");
for (let n of resultado) {
    document.write(`<li>${n.toFixed(4)}</li>`);
}
document.write("</ul>");