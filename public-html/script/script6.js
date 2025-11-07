// 8.	Generar contraseñas numéricas. Crear una función que genere una contraseña aleatoria de 6 dígitos (sólo números). Tip: recorre un bucle 6 veces y genera un dígito del 0 al 9 en cada iteración

console.log("Ejercicio 6(8.)");
document.write("<h3>Ejercicio 6 - Conversión</h3>");

// Función para generar contraseña de 6 dígitos
function generarContrasena() {
    let pwd = "";
    for (let i = 0; i < 6; i++) {
        let digito = Math.floor(Math.random() * 10);
        pwd += digito;
    }
    return pwd;
}

const contrasena = generarContrasena();

// Salida de datos
console.log("Contraseña generada: " + contrasena);
document.write(`<p><b>Contraseña generada:</b> ${contrasena}</p>`);