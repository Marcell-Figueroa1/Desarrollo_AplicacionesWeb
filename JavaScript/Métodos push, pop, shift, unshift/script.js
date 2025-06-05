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
    numeros.push(40) // Agrega el número 40 al final de la lista
    numeros.shift() // Elimina el primer numero de la lista
    numeros.unshift(5) // Agrega el número 5 al inicio de la lista
    numeros.pop() // Elimina el último elemento de la lista

    // Muesta la lista modificada en la consola
    console.log(numeros)
}


