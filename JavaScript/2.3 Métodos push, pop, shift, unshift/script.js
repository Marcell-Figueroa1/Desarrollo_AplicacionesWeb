console.log("Conexión establecida...")

// Ejercicio 1
let compras = []
compras.join(" - ")

function EjercicioPush() {
    // Ingresa un nuevo elemento al final de la array "compras"
    compras.push("Huevo", "Leche", "Pan")
    alert("La nueva lista de compras es: "+compras.join(" - "))
}

// Ejercicio 2
function EjercicioPop() {
    // Elimina el último elemento del array "compras" y lo 
    // guarda en una variable para mostrarlo
    let eliminado = compras.pop()
    alert(`El elemento eliminado de la lista es: ${eliminado}`)
}

// Ejercicio 3
let colores = ["Rojo", "Azul"]

function EjercicioUnshift () {
    // Ingresa un nuevo elemento al inicio de la array "compras"
    colores.unshift("Amarillo")
    alert("La nueva lista de colores es: "+ colores.join(" - "))
}

// Ejercicio 4
function EjercicioShift () {
    // Elimina el primer elemento del array "compras" y lo 
    // guarda en una variable para mostrarlo
    let eliminado = colores.shift()
    alert(`El elemento eliminado de la lista es: ${eliminado}`)
}

// Ejercicio 5
let numeros = [10, 20, 30]

function combinacionMetodo () {

    // Muesta la lista en la consola
    console.log(`Lista antes de los cambios: ${numeros}`)

    console.log(`Agregamos el número 40 al final de la lista con la función "push"`)
    numeros.push(40) // Agrega el número 40 al final de la lista

    // Muesta la lista modificada en la consola
    console.log(`Lista: ${numeros.join(" - ")}\n\nAhora eliminamos el primer número de la lista con la función "shift"`)
    numeros.shift() // Elimina el primer numero de la lista

    // Muesta la lista modificada en la consola
    console.log(`Lista: ${numeros.join(" - ")}\n\nAhora agregamos el número cinco al principio de la lista con la función "unshift"`)
    numeros.unshift(5) // Agrega el número 5 al inicio de la lista

    // Muesta la lista modificada en la consola
    console.log(`Lista: ${numeros.join(" - ")}\n\nAhora eliminamos el último numero de la lista con la función "pop"`)
    numeros.pop() // Elimina el último elemento de la lista

    // Muesta la lista modificada en la consola
    console.log(numeros)
}

// Ejercicio 6
let orden = []

function addOrdenInverso(){
    orden.unshift(3)
    orden.unshift(2)
    orden.unshift(1)
    console.log(orden)
}

// Ejercicio 7
let historial = ["Hola, ¿cómo estas?", "¿Qué haces?"]

function historialMensaje() {
    alert(`Lista antes de los cambios: ${historial.join(" - ")}`)
    alert(`Agregamos 3 mensajes al final de la lista historial usando la función "push"\n`)
    historial.push("¿Qué hiciste hoy?", "¿Qué tal te va?", "¿Juegas hoy?")
    alert(`Lista despues de los cambios: ${historial.join(" - ")}\n\nAhora eliminaremos el último mensaje de la lista\n`)
    eliminado = historial.pop()
    alert(`Mensaje eliminado: ${eliminado}\n\nLista despúes de los cambios: ${historial}`)
}

// Ejercicio 8
let cola = ["Cliente 1", "Cliente 2", "Cliente 3"]


function colaAtencion() {
    alert(`Lista antes de los cambios: ${cola.join(" - ")}\n\n`)
    alert(`Eliminamos el primer elemento de la lista con la función "shift"\n\n`)
    cola.shift()
    alert(`Lista despues de los cambios: ${cola.join(" - ")}\n\nAhora agregaremos el elemento "Cliente 4" en la lista con la \nfunción "push"`)
    cola.push("Cliente 4")
    alert(`Lista despues de los cambios: ${cola.join(" - ")}`)
}

// Ejercicio 9
let nombres = ["Pedro", "Juan", "Luis"]

function reordenarNombres (){
    
}