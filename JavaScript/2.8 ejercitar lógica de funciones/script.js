// Ejercicio 2: Programa con Función y Botón
// Instrucción:
//  Crea un programa en JavaScript que cumpla con lo siguiente:
// Debe existir un input de texto en HTML donde el usuario ingrese un número.
// Un botón debe ejecutar una función llamada mostrarSecuencia que reciba como parámetro el número ingresado.
// La función debe generar y retornar una cadena con todos los números desde 1 hasta el número 
// ingresado, marcando con un asterisco (*) aquellos que sean múltiplos de 4.
// El resultado debe mostrarse en el html.
// Publicar el proyecto en GitHub y adjuntar una captura de pantalla de la ejecución.

function secuencia(numeros){
    let resultado = []
    for (let i = 1; i <= numeros; i++){
        if (i % 4 === 0){
            resultado.push(`${i}*`)
        }
        else{
            resultado.push(i)
        }
    }
    return resultado.join(", ")
}
function mostrarSecuencia(){
    let input1 = document.getElementById("input1");
    let numeros = parseFloat(input1.value);
    if (isNaN(numeros)){
        alert("Ingrese solo números enteros!!.")
    }
    let resultadoFinal = secuencia(numeros)
    document.getElementById("resultado").textContent = resultadoFinal;
}