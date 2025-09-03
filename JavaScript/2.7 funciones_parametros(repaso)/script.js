// Ejercicio 2 (Función con Parámetros y Return)
// Instrucción:
// Crea una función llamada filtrarMultiples que:
// Reciba dos parámetros: un número limite y otro número multiplo.
// Retorne un arreglo con todos los números desde 1 hasta limite que sean divisibles por multiplo.
// Muestra el resultado con html (formateado como cadena).
// Usa input para pedir limite y multiplo.
// Objetivo de aprendizaje:
// Diseñar una función que use parámetros y retorne un valor.
// Practicar bucles for y condicionales if para filtrar datos.
// Aplicar lógica de divisibilidad y construir arreglos dinámicos.
// Ejemplo esperado:
// Si el usuario ingresa limite = 10 y  multiplo = 3, el resultado será:
// Números encontrados: 3, 6, 9

function filtrarMultiples(nLimite, multiplo){
    let listaMultiplo = [];
    for(let i = 1; i <= nLimite; i++){
        if(i % multiplo === 0){
            listaMultiplo.push(i)
        }
    }
    return listaMultiplo.join(" - ");
}
function mostrarMultiplos(){
    let input1 = document.getElementById("multiplo");
    let input2 = document.getElementById("nLimite");
    let vMultiplo = parseInt(input1.value);
    let nLimite = parseInt(input2.value);
    if (isNaN(vMultiplo) || isNaN(nLimite)){
        alert("Ingrese solo números enteros!!.");
        return;
    }
    let resultado = filtrarMultiples(nLimite, vMultiplo);
    document.getElementById("resultado").textContent = resultado;
}