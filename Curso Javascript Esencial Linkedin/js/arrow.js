"use strict"

//Funciones ARROW permiten simplificar bloques de codigo simple en una sola linea 


//función sin parámetros
var mensaje = () => {
    return "funcion sin parámetros"
};
console.log(mensaje());

//función con parametros
var suma = parametro => parametro + 100;
console.log(suma(50));

//función con más de 1 parámetro
var dosParams = (a, b) => a + b;
console.log(dosParams(1, 1));

//otra función de varios parametros

var variosParams = (a, b) => {
    var c = 1;
    return a + b + c;
};
console.log(variosParams(1, 1));

var parametros = CadenaEntero => "Hola" + 1;
console.log(parametros());

