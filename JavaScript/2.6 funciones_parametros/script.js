// 🟦 Ejercicio 1: Repetir una palabra N veces
// 📌 Solicita al usuario una palabra y un número usando prompt. Luego, crea una función que reciba ambos valores como parámetros, repita la 
// palabra N veces utilizando un bucle, y retorne el resultado completo como una cadena de texto. Muestra el resultado con alert.

function palabrasHastaN(palabra, veces){
    let resultado = "";
    for (let i = 0; i < veces; i++){
        resultado += `${palabra}, `
    }
    return resultado.trim();
}

function mostrarPalabras(){
    let input1 = document.getElementById("input1");
    let palabra = input1.value;
    let numero = parseInt(prompt("Ingrese cantidad a repartir:"));
    let resultadoFinal = palabrasHastaN(palabra, numero)
    if (isNaN(numero)){
        alert("Ingrese solo números enteros!!.")
    }
    document.getElementById("resultado").textContent = resultadoFinal;
}

// 🟦 Ejercicio 2: Comparar dos números
// 📌 Usa input para pedir dos números. Crea una función con dos parámetros que compare los valores y retorne un mensaje indicando cuál 
// número es mayor, menor o si son iguales. Muestra el mensaje en html.

function compararNumeros(n1, n2){
    if (n1 < n2){
        alert("El número 1 es menor que el número 2")
    }
    else{
        alert("El número 2 es menor que el número 1")
    }
}