let numeroEntero = 10
let numeroDecimal = 3.14
let cadenaTexto = "Hello world"
let valorBooleano = true
let arregloNumeros = [1, 2, 3, 4, 5]
let objetoPersona = {"Nombre": "Marcell", "Edad": 17}
let valorIndefinido
let valorNulo = null
let identificadorUnico = Symbol
let numeroGrande = BigInt(123344122312212131231312312313142454366997656757474)
const mes = "Mayo";

function mostrarNumeroEntero() {
    console.log("Número Entero:", numeroEntero);
  }

function mostrarNumeroDecimal() {
    console.log("Número decimal:", numeroDecimal);
}

function mostrarCadenaDeTexto() {
    console.log("Cadena de texto:", cadenaTexto);  
}

function mostrarValorBooleano() {
    console.log("Valor booleano:", valorBooleano);
}

function mostrarArregloNumero() {
    console.log("Arreglo de numeros:", arregloNumeros);
}

function mostrarObjetoPersona() {
    console.log("Persona:", objetoPersona);
}

function mostrarValorIndefinido() {
    console.log("Valor indefinido:", valorIndefinido);
}

function mostrarValorNulo() {
    console.log("Valor nulo:", valorNulo);
}

function mostrarIdentificadorUnico() {
    console.log("Identificador unico:", identificadorUnico);
}
  
function mostrarNumeroGrande() {
    console.log("Numero grande:", numeroGrande);
}
  
function mostrarConstanteMes() {
    console.log("Mes:", mes);
}
  
function Suma() {
    return numeroDecimal + numeroEntero 
}

mostrarNumeroEntero();
mostrarNumeroDecimal();
mostrarCadenaDeTexto();
mostrarValorBooleano();
mostrarArregloNumero();
mostrarObjetoPersona();
mostrarValorIndefinido();
mostrarValorNulo();
mostrarIdentificadorUnico();
mostrarNumeroGrande();
mostrarConstanteMes();

console.log("El resultado de la suma entre ",numeroDecimal,"y ",numeroEntero," es: ", Suma())