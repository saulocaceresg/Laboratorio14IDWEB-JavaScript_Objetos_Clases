// 14.	Herencia. Crear una clase base Usuario con nombre y email. Que lo hereden Cliente y Administrador
// •	Cliente tiene un nivel de fidelidad [1–5]
// •	Administrador tiene permisos (crear, editar, eliminar) 
//      Cada uno sobrescribe mostrarInfo() con diferente detalle
//      Tip: llama a super() para reutilizar atributos base

console.log("Ejercicio 12 (14.)");
document.write("<h3>Ejercicio 12 - Herencia</h3>");

let clientes = []; // Array para almacenar clientes y administradores

// Clase PADRE
class Usuario {
    #nombre;
    #email;
    constructor(nombre, email) {
        this.#nombre = nombre;
        this.#email = email;
    }
    get nombre() {
        return this.#nombre;
    }
    get email() {
        return this.#email;
    }
    mostrarInfo() {
        console.log("Usuario: " + this.nombre + "\nE-mail: " + this.email + "\n-------------------");
        document.write(`<p><b>Usuario:</b> ${this.nombre}<br><b>E-mail:</b> ${this.email}</p>`);
    }
}

// Clases HIJAS
class Cliente extends Usuario {
    #fidelidad;
    constructor(nombre, email, fidelidad) {
        super(nombre, email);
        fidelidad >= 1 || fidelidad <= 5 ? this.#fidelidad = fidelidad : this.#fidelidad = 1;
    }
    mostrarInfo() {
        console.log("Cliente: " + this.nombre + "\nE-mail: " + this.email + "\nNivel de fidelidad: " + this.#fidelidad + "\n-------------------");
        document.write(`<p><b>Cliente:</b> ${this.nombre}<br><b>E-mail:</b> ${this.email}<br><b>Nivel de fidelidad:</b> ${this.#fidelidad}</p>`);
    }
}

class Administrador extends Usuario {
    #permiso;
    constructor(nombe, email, permiso, cliente) {
        super(nombe, email);
        this.#permiso = permiso;
        this.cliente = cliente;
    }
    set permiso(permiso) {
        this.#permiso = permiso;
    }
    mostrarInfo () {
        console.log("ADMINISTRADOR\nNombre: " + this.nombre + "\nE-mail: " + this.email + "\nPermiso: " + this.#permiso);
        document.write(`<h5>ADMINISTRADOR</h5><p><b>Nombre:</b> ${this.nombre}<br><b>E-mail:</b> ${this.email}<br><b>Permiso:</b> ${this.#permiso}</p>`);
    }
    crear () {
        console.log("Creando cliente nuevo...");
        document.write("<hr><h4>Administrador - Crear Cliente</h4>");
        const nuevoCliente = new Cliente("Ana", "ana@gmail.com", 3);
        clientes.push(nuevoCliente);
        nuevoCliente.mostrarInfo();
        console.log("¡Cliente creado exitosamente!");
        document.write("<p>¡Cliente creado exitosamente!</p>");
    }
    editar () {
        console.log("Editando cliente " + this.cliente.nombre + "...");
        document.write("<hr><h4>Administrador - Editar Cliente</h4>");
        this.cliente = new Cliente("Pablo", "asas@gmail.com", 3);
        this.cliente.mostrarInfo();
        console.log("¡Cliente editado exitosamente!");
        document.write("<p>¡Cliente editado exitosamente!</p>");
    }
    eliminar () {
        console.log("Eliminando cliente " + this.cliente.nombre + "...");
        document.write("<hr><h4>Administrador - Eliminar Cliente</h4>");
        clientes = clientes.filter(c => c !== this.cliente); // Filtrar cliente eliminado
        this.cliente = null; // Primero filtra y luego elimina la referencia
        // clientes.pop();
        console.log("¡Cliente eliminado exitosamente!");
        document.write("<p>¡Cliente eliminado exitosamente!</p>");
    }
}


// Clientes de prueba
const cliente1 = new Cliente("Saulo", "saulo@gmail.com", 4);
clientes.push(cliente1);
cliente1.mostrarInfo();

const cliente2 = new Cliente("Deogracias", "deo@gmail.com", 2);
clientes.push(cliente2);
cliente2.mostrarInfo();

const cliente3 = new Cliente("Esdras", "esdras@gmail.com", 5);
clientes.push(cliente3);
cliente3.mostrarInfo();

const cliente4 = new Cliente("Crisanta", "cris@gmail.com", 1);
clientes.push(cliente4);
cliente4.mostrarInfo();

// Administrador de prueba. Se crea un cliente por defecto
const admin = new Administrador("Melquiades", "melq@gmail.com", "crear", cliente1);

admin.crear(); // Crear nuevo cliente

// Propiedades editar y eliminar
console.log("=========== Cambiando permiso a editar ===========");

admin.permiso = "editar";
admin.editar();

admin.cliente = cliente2; // Se cambia de cliente para poder eliminar

console.log("=========== Cambiando permiso a eliminar ===========");
admin.permiso = "eliminar";
admin.eliminar();



// 15.	Polimorfismo. Crear una lista de usuarios (Cliente, Administrador) y recórrela mostrando la información con mostrarInfo(). Tip: usa un forEach o for...of para recorrer el array

console.log("Ejercicio 13 (15.)");
document.write("<h3>Ejercicio 13 - Polimorfismo</h3>");

let usuarios = [new Cliente("Desamparados", "desa@gmail.com", 3), new Cliente("Socorro", "socorro@gmail.com", 5), new Administrador("Feliciano", "feliciano@gmail.com", "crear")];

console.log("\n========= Lista de clientes actuales =========");
document.write("<hr><h3>Lista de clientes actuales</h3>");

for (let j of usuarios) {
    j.mostrarInfo();
}