// 17.	Encapsulación y polimorfismo. Crear una clase Cuenta con atributo privado saldo y métodos depositar() y retirar(). Luego crea subclases CuentaAhorro y CuentaCorriente que redefinan retirar() según sus reglas (por ejemplo, permitir sobregiro en la cuenta corriente pero con un límite) y también la transferencia entre cuentas
// Tip: implementa validaciones distintas en cada clase hija.

console.log("Ejercicio 15 (17.)");
document.write("<h3>Ejercicio 15 - Encapsulación y polimorfismo</h3>");

class Cuenta {
    #saldo;
    constructor(saldo) {
        this.#saldo = saldo;
    }
    get saldo() {
        return this.#saldo;
    }
    depositar(monto) {
        if (monto > 0)
            this.#saldo += monto;
    }
    retirar(monto) {
        if (monto <= this.#saldo) {
            this.#saldo -= monto;
            return true;
        } else {
            return false;
        }
    }
    toString () {
        return `Saldo disponible: S/. ${this.saldo}`;
    }
}

// Clases hijas
class CuentaCorriente extends Cuenta {
    #deuda;
    constructor(saldo) {
        super(saldo);
        console.log("---- CUENTA CORRIENTE ----\nSaldo inicial: S/. " + saldo + "\nLímite de sobregiro: S/. " + saldo + " + " + saldo * 0.5);
        document.write(`<h5>CUENTA CORRIENTE</h5><p>Saldo inicial: S/. ${saldo}<br>Límite de sobregiro: S/. ${saldo} + ${saldo * 0.5} </p>`);
    }
    // Retira con sobregiro (deuda) si excede al saldo
    retirar(monto) {
        if (monto <= this.saldo) {
            super.retirar(monto);
            this.#deuda = 0;
            console.log("Monto retirado: S/. " + monto);
            document.write(`<p>Monto retirado: S/. ${monto}</p>`);
            return true;
        } else if (monto > this.saldo && monto < this.saldo * 1.5) {
            this.#deuda = monto - this.saldo;
            console.log("Monto retirado: S/. " + monto + "\nSOBREGIRO APLICADO: Deuda de S/. " + this.#deuda);
            document.write(`<p>Monto retirado: S/. ${monto}<br><b>SOBREGIRO APLICADO</b>: Deuda de S/. ${this.#deuda}</p>`);
            super.retirar(monto);
            return true;
        } else {
            console.log("Exceso de sobregiro. Límite excedido.");
            document.write(`<p>Exceso de sobregiro. Límite excedido</p>`);
            return false;
        }
    }
    toString () { // Sobreescribe el toString adjuntando la deuda
        return `Saldo actual Cuenta Corriente: S/. ${this.saldo}\nDeuda: S/. ${this.#deuda}`;
    }
}

class CuentaAhorro extends Cuenta {
    constructor(saldo) {
        super(saldo);
        console.log("---- CUENTA AHORRO ----\nSaldo inicial: S/. " + super.saldo);
        document.write(`<h5>CUENTA AHORRO</h5><p>Saldo inicial: S/. ${super.saldo}</p>`);
    }
    // Sólo retira si hay saldo suficiente
    retirar(monto) {
        // console.log("Monto a retirar: S/. " + monto);
        // document.write(`<p>Monto a retirar: S/. ${monto}</p>`);
        if (monto <= this.saldo) {
            super.retirar(monto);
            console.log("¡Monto retirado con éxito!");
            document.write(`<p>¡Monto retirado con éxito!</p>`);
            return true;
        } else {
            console.log("No se puede retirar más del saldo disponible en Cuenta de Ahorro.");
            document.write(`<p>No se puede retirar más del saldo disponible en Cuenta de Ahorro.</p>`);
            return false;
        }
    }
}

// Función para transferir
function transferencia(cuenta1, cuenta2, monto) {
    console.log("\n===== TRANSFERENCIA =====\nMonto a transferir: " + monto );
    if (cuenta1.retirar(monto)) {
        cuenta2.depositar(monto)
        console.log("\nCuenta 1: " + cuenta1.toString() + "\nCuenta 2: " + cuenta2.toString());
        console.log("OPERACIÓN COMPLETADA")
    } else {
        console.log("\nCuenta 1: " + cuenta1.toString() + "\nCuenta 2: " + cuenta2.toString());
        console.log("TRANSFERENCIA FALLIDA");
    }
    
}

// Cuentas
let corriente = new CuentaCorriente (2000);

corriente.retirar(1200);
console.log(corriente.toString());
document.write(`<pre style = "font-family: 'Times New Roman'">${corriente.toString()}</pre>`);
corriente.retirar(1000);
console.log(corriente.toString());
document.write(`<pre style = "font-family: 'Times New Roman'">${corriente.toString()}</pre>`);


let ahorro = new CuentaAhorro (1000);

ahorro.retirar(100);
console.log(ahorro.toString());
document.write(`<pre style = "font-family: 'Times New Roman'">${ahorro.toString()}</pre>`)
ahorro.retirar(950);
console.log(ahorro.toString());
document.write(`<pre style = "font-family: 'Times New Roman'">${ahorro.toString()}</pre>`)

transferencia(corriente, ahorro, 50); // transferencia exitosa
transferencia(ahorro, corriente, 20000); // transferencia fallida
