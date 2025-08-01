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