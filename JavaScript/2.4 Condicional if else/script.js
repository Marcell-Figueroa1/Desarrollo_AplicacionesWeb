/* 
✅Ejercicio 1: Verificar mayoría de edad
Crea una variable edad con un valor numérico.
Si la edad es mayor o igual a 18, muestra "Acceso permitido".
Si no, muestra "Acceso denegado". 
*/

function mayorEdad (){
    let edad = parseInt(prompt("Ingrese su edad (solo números enteros): "))

    if (edad >= 18){
        document.getElementById("resultado").innerHTML = `<p>Acceso permitido, tu edad: ${edad} años</p>`;
    }
    else if (edad <= 17 && edad >= 0){
        document.getElementById("resultado").innerHTML = `<p>Acceso denegado, tu edad: ${edad} años</p>`;
    }
    else{
        document.getElementById("resultado").innerHTML = `<p>El valor: <strong>${edad}</strong> es invalido.</p>`;
    }
}

/*
✅Ejercicio 2: Añadir producto si no está
js
let productos = ["pan", "leche", "queso"];

Declara la variable nuevoProducto.
Si productos no incluye el nuevo producto (usa includes()), agrégalo con push() y muestra el arreglo.
Si ya está, muestra "Producto ya ingresado".
 */

let productos = ["pan", "leche", "queso"];
function añadirProducto (){
    
    let NuevoProducto = prompt("Ingrese un nuevo producto: ");

    if (productos[0] == NuevoProducto){
        document.getElementById("resultado").innerHTML = `<p>El producto: <strong>${NuevoProducto}</strong> ya esta ingresado en la lista.</p>`;
    }
    else if (productos[1] == NuevoProducto){
        document.getElementById("resultado").innerHTML = `<p>El producto: <strong>${NuevoProducto}</strong> ya esta ingresado en la lista.</p>`;
    }
    else if (productos[2] == NuevoProducto){
        document.getElementById("resultado").innerHTML = `<p>El producto: <strong>${NuevoProducto}</strong> ya esta ingresado en la lista.</p>`;
    }
    else{
        productos.push(NuevoProducto)
        document.getElementById("resultado").innerHTML = `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;;
    }
}

/*
✅ Ejercicio 3: Control de tareas
Declara el arreglo tareas con 6 tareas predefinidas.
Si el arreglo tiene más de 5 elementos, usa pop() para eliminar la última y muestra el arreglo.
Si tiene 5 o menos, muestra "Lista aceptable".
*/

let tareas = []

function controlTareas (){
    tareas = ["Lavar los platos", "Hacer la cama", "Estudiar JavaScript", "Hacer ejercicio", "Leer un libro", "Preparar la cena"];

    if (tareas.length > 5){
        tareas.pop();
        document.getElementById("resultado").innerHTML = `<p>Lista de tareas actualizada: <strong>${tareas.join(" - ")}</strong></p>`;
    }
    else{
        document.getElementById("resultado").innerHTML = `<p>Lista aceptable: <strong>${tareas.join(" - ")}</strong></p>`;
    }
}

/*
✅ Ejercicio 4: Validar primer elemento
js
let cola = ["sinNombre", "Pedro", "Lucía"];

Si el primer elemento es "sinNombre", elimínalo con shift() y muestra el nuevo arreglo.
Si no, muestra "Cola correcta". 
*/


let cola = ["sinNombre", "Pedro", "Lucía"];
function validarCola (){
    if (cola[0] == "sinNombre"){
        cola.shift();
        document.getElementById("resultado").innerHTML = `<p>Nuevo arreglo de la cola: <strong>${cola.join(" - ")}</strong></p>`;
    }
    else{
        document.getElementById("resultado").innerHTML = `<p>Cola correcta: <strong>${cola.join(" - ")}</strong></p>`;
    }
    
}


/* 
✅ Ejercicio 5: Saludo condicional
Declara la variable nombre.
Si no está vacío, crea un arreglo saludos y usa push() para añadir "Hola, [nombre]".
Si está vacío, muestra "Nombre no válido". 
*/
let saludos = [];
function saludoCondicional (){
    let nombre = prompt("Ingrese su nombre: ");

    if (nombre.trim() != ""){
        saludos.push(`Hola, ${nombre}`);
        document.getElementById("resultado").innerHTML = `<p>Saludos: <strong>${saludos.join(" - ")}</strong></p>`;
    }
    else{
        document.getElementById("resultado").innerHTML = `<p>Nombre no válido.</p>`;
    }
}

/*
✅ Ejercicio 6: Calificar nota
Declara la variable nota con un valor entre 1 y 7.
Si nota >= 6: muestra "Excelente".
Si nota >= 4: muestra "Aprobado".
Si nota < 4: muestra "Reprobado".
*/

function calificarNota (){
    let nota = parseFloat(prompt("Ingrese una nota entre 1 y 7: "));

    if (nota >= 6 && nota <= 7){
        document.getElementById("resultado").innerHTML = `<p>Excelente: ${nota}</p>`;
    }
    else if (nota >= 4 && nota < 6){
        document.getElementById("resultado").innerHTML = `<p>Aprobado: ${nota}</p>`;
    }
    else if (nota < 4 && nota >= 1){
        document.getElementById("resultado").innerHTML = `<p>Reprobado: ${nota}</p>`;
    }
    else{
        document.getElementById("resultado").innerHTML = `<p>La nota ingresada: <strong>${nota}</strong> es invalida.</p>`;
    }
}

/*
✅ Ejercicio 7: Registro de visitantes 
Crea un arreglo vacío visitas y una variable persona.
let visitas = [];
Si el nombre no está vacío, usa unshift() para añadirlo al inicio.
Si está vacío, muestra "Error: nombre vacío".
*/  
let visitas = [];
function registroVisitantes (){
    let persona = prompt("Ingrese su nombre: ");

    if (persona != ""){
        visitas.unshift(persona);
        document.getElementById("resultado").innerHTML = `<p>Visitas registradas: <strong>${visitas.join(" - ")}</strong></p>`;
    }
    else{
        document.getElementById("resultado").innerHTML = `<p>Error: nombre vacío.</p>`;
    }
}
/*
✅ Ejercicio 8: Control de stock
js
let stock = ["arroz", "fideos"];

Declara la variable productoSolicitado.
Si stock incluye el producto, muestra "Producto disponible".
Si no, agrégalo con push() y muestra "Producto agregado al stock".

*/

let stock = ["arroz", "fideos"];
function controlStock (){
    let productoSolicitado = prompt("Ingrese el nombre del producto solicitado: ");

    if (stock.includes(productoSolicitado)){
        document.getElementById("resultado").innerHTML = `<p>Producto disponible: <strong>${productoSolicitado}</strong></p>`;
    }
    else{
        stock.push(productoSolicitado);
        document.getElementById("resultado").innerHTML = `<p>Producto agregado al stock: <strong>${productoSolicitado}</strong></p>`;
    }
}

/*
✅ Ejercicio 9: Lista de invitados
js
let invitados = ["Ana", "Luis", "Camila"];

Declara la variable persona.
Si la persona está en el arreglo, muestra "Bienvenido, [nombre]".
Si no, muestra "No estás en la lista".
*/

let invitados = ["Ana", "Luis", "Camila"];
function listaInvitados (){
    let persona = prompt("Ingrese su nombre: ");

    if (invitados.includes(persona)){
        document.getElementById("resultado").innerHTML = `<p>Bienvenido/a, <strong>${persona}</strong></p>`;
    }
    else{
        document.getElementById("resultado").innerHTML = `<p>No estás en la lista.</p>`;
    }
}

/*
✅ Ejercicio 10: Evaluar rol de usuario
let usuarios = ["Admin", "Editor", "Invitado"];
Declara la variable rol.
Si rol === "Admin", agrégalo al inicio con unshift() y muestra "Rol prioritario agregado".
Si es otro rol, usa push() y muestra "Rol agregado".
*/

let usuarios = ["Admin", "Editor", "Invitado"];
function evaluarRolUsuario (){
    let rol = prompt("Ingrese su rol: ");

    if (rol === "Admin"){
        usuarios.unshift(rol);
        document.getElementById("resultado").innerHTML = `<p>Rol prioritario agregado.</p>`;
    }
    else{
        usuarios.push(rol);
        document.getElementById("resultado").innerHTML = `<p>Rol agregado: <br><strong>${usuarios.join(" - ")}</strong></p>`;
    }
}