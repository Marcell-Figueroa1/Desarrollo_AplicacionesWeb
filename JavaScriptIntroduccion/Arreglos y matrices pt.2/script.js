console.log("Conexión establecida...")

function msg() {
    let palabras = ["Marcell", "encanta", "fútbol", "basket", "apasionado", "amigos"]
    alert(palabras[0]+" a pesar de ser jugador "+palabras[4]+" de "+palabras[2]+", le "+palabras[1]+" jugar "+palabras[3]+" con sus "+palabras[5]+".")
}

function msg2() {
    let palabras2 = ["tres", "perros", "corrieron", "rápidamente", "verde", "parque"]
    alert("Los "+palabras2[0]+" "+palabras2[1]+" "+palabras2[2]+" "+palabras2[3]+" por el "+palabras2[4]+" "+palabras2[5]+".")
}

function mtrz1() {
    let matriz1 = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
    ];
    let rsuma = matriz1 [0][2] + matriz1 [1][1];
    alert("El resulado de la suma de los números dentro de las matrices es: "+rsuma)
}

function mtrz2() {
    let matriz2 = [
    [1, 2, 3, 4],
    [5, 6, [7, 8, [9, 10]]]
];
    let resultado = matriz2[0] [1] + matriz2[1] [2] [1] + matriz2[1] [2] [2] [0]
    alert("El resulado de la suma de los números dentro de las matrices es: "+ resultado)
}

function armtrz() {
    let sujeto = ["El perro", "el gato"];
    let acciones = [
        ["ladrar", "correr"],
        ["dormir", "saltar"]
    ];
    alert(sujeto[0]+" y "+sujeto[1]+" pueden "+acciones[0][1]+", "+acciones[1][0]+" y "+acciones[1][1]+
        " pero solo "+sujeto[0]+" puede "+acciones[0][0])
}