console.log("Conexión exitosa con el script de ciclos while y for");
// Ejercicios de ciclos while y for

/* ✅ Ejercicio 1: Contador del 1 al N
Pide al usuario un número con prompt() y usa un for para mostrar los números del 1 hasta ese número. */

function contadorHastaN() {
    let numero = parseInt(prompt("Ingrese un número: "));
    let resultado = "";


    for (let i = 1; i <= numero; i++) {
        resultado += `${i} `;
    }
    document.getElementById("resultado").innerHTML = `<p>Números del 1 al ${numero}: 
    <strong>${resultado.trim()}</strong></p>`;
}

/* ✅ Ejercicio 2: Suma de 5 números
Con un while, pide 5 números al usuario (uno por uno con prompt()) y muestra la suma total en pantalla. */
function sumaCincoNumeros() {
    let suma = 0;
    let contador = 0;

    while (contador < 5) {
        let numero = parseFloat(prompt("Ingrese un número: "));
        suma += numero;
        contador++;
    }
    document.getElementById("resultado").innerHTML = `<p>Suma total de los 5 números: 
    <strong>${suma}</strong></p>`;
}

/* ✅ Ejercicio 3: Mostrar solo los pares entre 1 y 20
Usa un for para mostrar en pantalla solo los números pares del 1 al 20. */

function mostrarPares() {
    let resultado = "";

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            resultado += `${i} `;
        }
    }
    document.getElementById("resultado").innerHTML = `<p>Números pares del 1 al 20: 
    <strong>${resultado.trim()}</strong></p>`;
}

/* ✅ Ejercicio 4: Contador regresivo con condición
Pide un número al usuario y, usando un while, cuenta regresivamente hasta 0. 
Si el número es menor que 0, muestra "Número no válido".*/

function contadorRegresivo() {
    let numero = parseInt(prompt("Ingrese un número: "));
    let resultado = "";

    if (numero < 0) {
        document.getElementById("resultado").innerHTML = `<p>Número no válido.</p>`;
    }

    while (numero >= 0) {
        resultado += `${numero} `;
        numero--;
    }
    document.getElementById("resultado").innerHTML = `<p>Contador regresivo: 
    <strong>${resultado.trim()}</strong></p>`;
}

/* ✅ Ejercicio 5: Mostrar la tabla de multiplicar de un número
Solicita al usuario un número y usa un for para mostrar su tabla de multiplicar del 1 al 10. */

function tablaMultiplicar() {
    let numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar: "));
    let resultado = "";

    if (isNaN(numero)) {
        document.getElementById("resultado").innerHTML = `<p>Por favor, ingrese un número válido.</p>`;
        return;
    }

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    document.getElementById("resultado").innerHTML = `<p>Tabla de multiplicar del ${numero}:<br>
    <strong>${resultado}</strong></p>`;
}

/* ✅ Ejercicio 6: Sumar hasta que se ingrese cero
Con while, sigue pidiendo números con prompt() y súmalos, hasta que el usuario escriba 0. Muestra el total acumulado sin do while.
*/
function sumarHastaCero() {
    let suma = 0;
    let numero;

    while (true) {
        numero = parseFloat(prompt("Ingrese un número (0 para terminar): "));
        if (numero === 0) {
            break;
        }
        suma += numero;
    }
    document.getElementById("resultado").innerHTML = `<p>Total acumulado: 
    <strong>${suma}</strong></p>`;
}

/* ✅ Ejercicio 7: Mostrar letras de una palabra
Pide al usuario una palabra y usa un for para mostrar cada letra por separado en el HTML. */
function mostrarLetras() {
    let palabra = prompt("Ingrese una palabra: ");
    let resultado = "";

    if (palabra.trim() === "") {
        document.getElementById("resultado").innerHTML = `<p>Por favor, ingrese una palabra válida.</p>`;
    }

    for (let i = 0; i < palabra.length; i++) {
        resultado += `${palabra[i]}<br>`;
    }
    document.getElementById("resultado").innerHTML = `<p>Letras de la palabra: <br>
    <strong>${resultado}</strong></p>`;
}

/* ✅ Ejercicio 8: Validar contraseña
Pide una contraseña al usuario y sigue pidiendo con while hasta que escriba 
"admin123". Luego, muestra "Acceso concedido" sin do while. */

function validarContrasena() {
    let contrasena;

    while (true) {
        contrasena = prompt("Ingrese la contraseña: ");
        if (contrasena === "admin123") {
            document.getElementById("resultado").innerHTML = `<p>Acceso concedido.</p>`;
            break;
        } else {
            alert("Contraseña incorrecta, intente nuevamente.");
        }
    }
}

/* ✅ Ejercicio 9: Promedio de notas
Pide con prompt() cuántas notas va a ingresar. Usa un for para pedir cada nota, calcula el promedio y lo muestra.
*/
function promedioNotas() {
    let cantidad = parseInt(prompt("¿Cuántas notas va a ingresar?"));
    let suma = 0;

    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").innerHTML = `<p>Por favor, ingrese un número válido de notas.</p>`;
        return;
    }

    for (let i = 1; i <= cantidad; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i}:`));
        if (isNaN(nota)) {
            document.getElementById("resultado").innerHTML = `<p>Nota inválida, por favor ingrese un número.</p>`;
            return;
        }
        suma += nota;
    }
    let promedio = suma / cantidad;
    document.getElementById("resultado").innerHTML = `<p>El promedio de las notas es: 
    <strong>${promedio.toFixed(2)}</strong></p>`;
}

/* ✅ Ejercicio 10: Contar cuántos son mayores de edad
Pide con prompt() cuántas personas vas a ingresar. Por cada persona, pide la edad y muestra al final cuántas son mayores de edad (18+).
*/
function contarMayoresEdad() {
    let cantidad = parseInt(prompt("¿Cuántas personas va a ingresar?"));
    let mayoresEdad = 0;

    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").innerHTML = `<p>Por favor, ingrese un número válido de personas.</p>`;
        return;
    }

    for (let i = 1; i <= cantidad; i++) {
        let edad = parseInt(prompt(`Ingrese la edad de la persona ${i}:`));
        if (isNaN(edad)) {
            document.getElementById("resultado").innerHTML = `<p>Edad inválida, por favor ingrese un número.</p>`;
            return;
        }
        if (edad >= 18) {
            mayoresEdad++;
        }
    }
    document.getElementById("resultado").innerHTML = `<p>Total de mayores de edad: 
    <strong>${mayoresEdad}</strong></p>`;
}