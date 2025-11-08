// 11.	Control de inventario con encapsulación. Crear una clase Producto con atributos privados nombre, precio, stock. Implementa setters que validen que el precio y el stock sean mayores a 0
// Agregar un método vender(cantidad) que disminuya el stock solo si hay unidades suficientes

console.log("Ejercicio 9(11.)");
document.write("<h3>Ejercicio 9 - Inventario</h3>");

// Clase Poducto
class Producto {
    // Propiedades privadas
    #nombre;
    #precio;
    #stock;
    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.#precio = precio;
        this.#stock = stock;
    }

    // Getters y Setters
    set nombre(nombre) {
        this.#nombre = nombre;
    }
    get nombre() {
        return this.#nombre;
    }

    set precio(precio) {
        if (precio > 0) {
            this.#precio = precio;
        } else {
            console.log("El precio debe ser mayor a 0.");
        }
    }
    get precio() {
        return this.#precio;
    }

    set stock (stock) {
        if (stock > 0) {
            this.#stock = stock;
        } else {
            console.log("El stock debe ser mayor a 0.");
        }
    }
    get stock() {
        return this.#stock;
    }

    // Método vender
    vender(cantidad) {
        if (this.stock > 0 && this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log("Se han vendido " + cantidad + " unidades de " + this.nombre + ".\nStock restante: " + this.stock);
            document.write(`<p>Se han vendido 2 unidades de ${producto.nombre}.<br><b>Stock restante:</b> ${producto.stock}</p>`);
            return;
        } else {
            console.log("No hay stock suficiente para vender " + cantidad + " unidades de " + this.nombre + ".");
        }
    }
}

const producto = new Producto("Laptop", 1500, 10);

// Salida de datos
console.log("Nombre del producto: " + producto.nombre + "\nPrecio: S/. " + producto.precio + "\nStock disponible: " + producto.stock)
document.write(`<p><b>Nombre del producto:</b> ${producto.nombre}<br><b>Precio:</b> S/. ${producto.precio}<br><b>Stock disponible:</b> ${producto.stock}</p>`);
producto.vender(2);
producto.vender(9);
producto.vender(3);

producto.vender(2);