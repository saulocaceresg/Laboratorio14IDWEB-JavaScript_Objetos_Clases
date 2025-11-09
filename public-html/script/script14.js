// 18.	Composición. Crear una clase Carrito que contenga una lista de objetos Producto. Agrega métodos agregarProducto(), calcularTotal() y mostrarResumen() 
// Tip: usa un array de objetos

console.log("Ejercicio 16 (18.)");
document.write("<h3>Ejercicio 16 - Composición</h3>");

// Clase Producto, con atributos nombre, precio y stock
class Producto {
    #nombre;
    #precio;
    #stock;
    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }
    get nombre () {
        return this.#nombre;
    }
    get precio () {
        return this.#precio;
    }
    get stock () {
        return this.#stock;
    }
    toString () {
        return `Nombre: ${this.#nombre}\nPrecio: S/. ${this.#precio}\nStock disponible: ${this.#stock}`;
    }
}

// Clase Carrito para almacenar los Productos
class Carrito {
    constructor(productos) {
        this.productos = productos;
    }
    agregarProducto (nombre, precio, stock) {
        const nuevoProducto = new Producto (nombre, precio, stock);
        this.productos.push(nuevoProducto);
    }
    // Suma solo precios indivuduales
    calcularTotal () {
        let precioTotal = 0;
        for (const i of this.productos) {
            precioTotal += i.precio;
        }
        return precioTotal;
    }
    mostrarResumen () {
        for (const i of this.productos) {
            console.log(i.toString());
            document.write(`<pre>${i.toString()}</p>`);
        }
    }
}

// Inicialización de arreglo de productos
let productos = [new Producto("Mouse", 20, 40), new Producto("Tinta Azul" , 30, 10), new Producto("Cargador", 15, 15), new Producto("Funda", 8, 14)];

// Creación del objeto miCarrito
let miCarrito = new Carrito (productos);
miCarrito.mostrarResumen(); // Método de mostrar resumen
console.log(`Precio total (por unidad): S/. ${miCarrito.calcularTotal()}`);
document.write(`<p><b>Precio total (por unidad):</b> S/. ${miCarrito.calcularTotal()}</p>`); // Método para calcular el precio total

// Agregar producto
console.log("Agregando producto...");
document.write(`<p><b>Agregando producto...</b></p>`);
miCarrito.agregarProducto("Impresora", 500, 6); // Producto agregado
miCarrito.mostrarResumen();

// Salida de datos
console.log("Producto " + productos[productos.length - 1].nombre + " agregado");
document.write(`<p>Producto ${productos[productos.length - 1].nombre} agregado</p>`);
console.log(`Precio total (por unidad): S/. ${miCarrito.calcularTotal()}`);
document.write(`<p><b>Precio total (por unidad):</b> S/. ${miCarrito.calcularTotal()}</p>`);

