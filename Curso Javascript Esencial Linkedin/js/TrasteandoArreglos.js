"use strict"

///////PRACTICA INCOMPLETA/////////////////



//Funciones para manipular Arreglos

var Mcdonalds = {"Nugget":3,"BigMac":7,"McFlurry":2,"Coca-Cola":2};
var Mcdonalds1 = ["Nugget","BigMac","McFlurry","Coca-Cola"];
var PizzaHut  = ["Margarita","Hawaiana","Campiña","Marinera"];

var McMenu    = new Object();
McMenu.combo1 = null;

console.log(typeof(Mcdonalds)); // Es un objeto
console.log(Array.isArray(Mcdonalds)); // False = No es un arreglo
console.log(Mcdonalds);
console.log(Mcdonalds[0,2]);

//Utilizamos función typeof para conocer que tipo de variable es Mcdonalds:
//console.log(typeof(Mcdonalds1)); //Es un objeto

/*utilizamos la propiedad isArray de la clase Array
devolverá si estamos trabajando con un array (true or false)*/
//console.log(Array.isArray(Mcdonalds)); 

//console.log(Mcdonalds1.sort());
//console.log(Mcdonalds1.reverse());




///////////////////////////
var miAuto = new Object();
miAuto.marca = "Ford";
miAuto.modelo = "Mustang";
miAuto.año = 1969;
console.log(miAuto);


