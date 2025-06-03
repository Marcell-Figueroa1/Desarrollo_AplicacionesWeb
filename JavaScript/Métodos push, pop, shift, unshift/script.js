console.log("Conexión establecida...")

let compras = ["Huevo", "Nintendo", "Pan"]
compras.join(" - ")

function EjercicioPush() {
    // Ingresa un nuevo elemento al final de la array "compras"
    carrito = prompt("Agregar un elemento a la lista de compras: ")
    compras.push(carrito)
    alert("La nueva lista de compras es: "+ compras.join(" - "))
}
function EjercicioPop() {
    // Elimina el último elemento del array "compras" y lo 
    // guarda en una variable para mostrarlo
    let eliminado = compras.pop()
    alert(`El elemento eliminado de la lista es: ${eliminado}`)
}
function EjercicioUnshift () {
    // Ingresa un nuevo elemento al inicio de la array "compras"
    carrito = prompt("Agregar un elemento a la lista de compras: ")
    compras.unshift(carrito)
    alert("La nueva lista de compras es: "+ compras.join(" - "))
}
function EjercicioShift () {
    // Elimina el primer elemento del array "compras" y lo 
    // guarda en una variable para mostrarlo
    let eliminado = compras.shift()
    alert(`El elemento eliminado de la lista es: ${eliminado}`)
}
