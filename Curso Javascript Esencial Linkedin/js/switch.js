"use strict"

/*CABE DESTACAR que no pude utilizar los case con operaciones de comparacion (>,<) 
SOLO FUNCIONO utilizando =, concretamente deben ser iguales*/
var edad = 27;
var edades = 0;

switch (edad) {
    case edad = 18:
        edades = "Eres menor de edad";
    break;
    case edad  = 27:
        edades = "Eres mayor de edad";
    break;
    case edad = 100:
        edades = "Estas muerto en vida";
    break;
    default:
        console.log("no aplica");
    break;
}

console.log(edades);

var device = "Tv";
var dispositivo = "";

switch (device) {
    case "Tv":
        dispositivo = "Se Eligió la TV";
        break;
    case "Radio":
        dispositivo = "Se Eligió La Radio";
    break;
    default:
        break;
}

console.log(dispositivo);