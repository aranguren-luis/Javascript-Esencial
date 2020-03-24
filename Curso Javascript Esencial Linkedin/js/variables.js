"use strict"

var nombre = "soy una variable de tipo global";
console.log(nombre);

function saludo(){
    let nombre = "soy una variable de bloque";
    console.log(nombre);
};

saludo();

const nombre1 = "soy una constante, no puedo ser modificada";
console.log(nombre);


var edad = 27;
var edadstr = String(edad); //convertimos entero en cadena con funcion string

//la funcion boolean establece una comparacion de tipo true or false:
var elegir = Boolean(10 > 9); //el resultado sera true 
var elegir2 = Boolean(10 < 9); //el resultado sera false

