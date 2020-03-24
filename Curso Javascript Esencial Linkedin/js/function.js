//Practicando la utlidad de las funciones
"use strict"


function Hola(nombre, edad){
    var mensaje = "Hola " + nombre + " tienes " + edad + " años";
    console.log(mensaje);
    return mensaje;
};

var saludar = Hola("Cristina", 27);
console.log(saludar);

///////////////////////////////////////////////////////////////////////
//PARAMETRO REST: permite recibir varios valores a la vez en un solo parámetro

function receta(ingrediente1, ingrediente2, ...variosingredientes){
    var platillo = "1: " + ingrediente1 + " 2: " + ingrediente2 + " varios: " + variosingredientes;
    return platillo;
};

var platilloListo = receta("papa","ajo","yuca","col","maíz","cebolla","tomate");
console.log(platilloListo); 

////////////////////////////////////////////////////////////////////////////////
function parametroREST(...variosdatos){
    var datos = "Varios datos: " + variosdatos;
    return datos;
};

var mostrar = parametroREST(1, 2, 3, "A", "B", "C");
console.log(mostrar);