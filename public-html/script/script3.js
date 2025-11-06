// 5.	Lanzamiento de dados. Simula el lanzamiento de dos dados (valores del 1 al 6) y muestra su suma. Tip: reutiliza la función del ejercicio anterior

console.log("Ejercicio 3(5.)");
document.write("<h3>Ejercicio 3 - Lanzamiento de datos</h3>");

console.log("DADOS LANZADOS...");

// Función para generar número aleatorio en rango
function numeroAleatorio(min, max) {
    let dado1, dado2, puntos1 = "", puntos2 = "";
    dado1 = Math.floor(Math.random() * (max - min + 1) + min);
    dado2 = Math.floor(Math.random() * (max - min + 1) + min);

    // Ciclos for para representar los puntos de los dados
    for (let i = 0; i < dado1; i++) {
        puntos1 += "*";
    }
    console.log("Dado 1: " + dado1 + " | " + puntos1 + " |");
    puntos2 = "";
    for (let i = 0; i < dado2; i++) {
        puntos2 += "*";
    }
    console.log("Dado 2: " + dado2 + " | " + puntos2 + " |");
    document.write(`<p>Primer dado: <b>${dado1} ${puntos1}</b><br>Segundo dado: <b>${dado2} ${puntos2}</b></p>`);
    return dado1 + dado2
}

const dado = numeroAleatorio(1, 6);

// Salida de datos
console.log("Suma de los dados: " + dado);
document.write(`<p>Suma de los dados lanzados: <b>${dado}</b></p>`);