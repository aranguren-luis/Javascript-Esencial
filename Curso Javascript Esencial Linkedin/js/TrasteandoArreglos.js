"use strict"

///////PRACTICA INCOMPLETA/////////////////



//Funciones para manipular Arreglos

var Mcdonalds = [{"Nugget":3},{"BigMac":7},{"McFlurry":2},{"Coca-Cola":2}];
var Mcdonalds1 = ["Nugget","BigMac","McFlurry","Coca-Cola"];
var PizzaHut  = ["Margarita","Hawaiana","Campiña","Marinera"];

var McMenu    = new Object();

//Utilizamos función typeof para conocer que tipo de variable es Mcdonalds:
console.log(typeof(Mcdonalds1)); 

console.log(Mcdonalds1);

/*utilizamos la propiedad isArray de la clase Array
devolverá si estamos trabajando con un array (true or false)*/
console.log(Array.isArray(Mcdonalds)); 

console.log(Mcdonalds1.sort());
console.log(Mcdonalds1.reverse());

///////////////////////////
var miAuto = new Object();
miAuto.marca = "Ford";
miAuto.modelo = "Mustang";
miAuto.año = 1969;
console.log(miAuto);


