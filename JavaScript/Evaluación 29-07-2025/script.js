// Ejercicio 2: Creación de función con parámetros y botón

// Crea un programa en JavaScript que cumpla los siguientes requisitos:
// Debe existir un input de texto en HTML donde el usuario ingrese un número.
// Un botón debe ejecutar una función que reciba como parámetro el número ingresado y retorne todos los números impares desde 1 hasta el número dado.
// El resultado debe mostrarse con alert y en la consola usando console.log.
// Usa for, if y lógica con return para generar los valores.
// Pública el proyecto en GitHub y adjunta una captura de pantalla de la ejecución.

// Ejemplo esperado:
// Si el usuario ingresa 10, el resultado debe ser:
// 1, 3, 5, 7, 9

function numeroImpar(numero){
    let resultado = [];
    for(let i = 0; i <= numero; i++){
        if (i % 2 !== 0){
            resultado.push(i)
        }
    }
    return resultado;
}
function mostrarImpar(){
    let input = document.getElementById("input1");
    let numero = parseInt(input.value);
    let resultadoFinal = numeroImpar(numero);
    document.getElementById("resultado").textContent = resultadoFinal;
    if (isNaN(numero)){
        alert("Ingrese un número válido.");
    }
}