// 19.	Polimorfismo. Crear una clase base Notificacion con un método enviar(). Implementa subclases Email, SMS y Push que sobrescriban enviar() con mensajes distintos. Luego crea una función que reciba una lista de notificaciones y las procese dinámicamente
// Tip: usa una estructura de datos adecuada que almacene objetos y que llame a notificacion.enviar() en un bucle.

console.log("Ejercicio 17 (19.)");
document.write("<h3>Ejercicio 17 - Polimorfismo</h3>");

// Clase padre
class Notificacion {
    #mensaje;
    constructor(mensaje) {
        this.#mensaje = mensaje;
    }
    get mensaje () {
        return this.#mensaje;
    }
    enviar () {
        return `Enviando mensaje...`;
    }
}

// Subclases
class Email extends Notificacion {
    constructor(mensaje) {
        super(mensaje);
    }
    enviar () {
        return this.mensaje;
    }
}

class SMS extends Notificacion {
    constructor(mensaje) {
        super(mensaje);
    }
    enviar () {
        return this.mensaje;
    }
}

class Push extends Notificacion {
    constructor(mensaje) {
        super(mensaje);
    }
    enviar () {
        return this.mensaje;
    }
}

// Función que almacena notificaciones en un map
function recibirNotificaciones(notificaciones) {
    let mapNotificaciones = new Map ();
    // let claves = ["Email", "SMS", "Push"]
    let notEmail = [];
    let notSMS = [];
    let notPush = [];
    for (let i = 0; i < notificaciones.length; i++) {
        const n = notificaciones[i];
        // switch-case para almacenar cada objeto según la instancia
        switch (true) {
            case n instanceof Email:
                notEmail.push(n);
                break;
            case n instanceof SMS:
                notSMS.push(n);
                break;
            case n instanceof Push:
                notPush.push(n);
                break;
            default:
                console.log("ERROR AL ASIGNAR INSTANCIA");
                break;
        }
    }
    mapNotificaciones.set("Email", notEmail);
    mapNotificaciones.set("SMS", notSMS);
    mapNotificaciones.set("Push", notPush);

    return mapNotificaciones;
}

/* ================ PROGRAMA EN SÍ ====================== */

// Inicialización de objetos
let notificaciones = [
    new Email("DIOS te ha enviado un correo. Revísalo."),
    new SMS("SMS de EL VATICANO: ¡Hola!"),
    new SMS("SMS DEL GOBIERNO PERUANO: Terremoto de 35 grados. Tenga cuidado."),
    new Email("EL GRAN HERMANO te ha enviado un correo. Revísalo."),
    new Push("Icma subió: ¡La PALABRA no tiene SENTIDO!")
];

let mapNotificaciones = recibirNotificaciones(notificaciones);

// Salida de datos
document.write(`<p>`);
for (let [clave, valor] of mapNotificaciones) {
    console.log(`${clave}`);
    document.write(`<b>${clave}</b><br>`);
    for (let n of valor) {
        console.log(" -", n.enviar());
        document.write(` - ${n.enviar()}<br>`);
    }
}
document.write(`</p>`);
