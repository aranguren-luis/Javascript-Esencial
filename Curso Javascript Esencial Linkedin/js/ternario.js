"use strict"
//el operador ternario permite realizar pequeñas operaciones deforma mas reducida 
// la logica es la siguiente:
//Condicion ? TRUE : FALSE

var a = 10;
var b = 15;

// condicion: a(10) es menor que b(15) ? NO es VERDAD : es FALSO
var resultado = a > b ? a + "mayor que " + b : a + " menor que "+ b;


//hola(4 letras) es mayor que saludo(6 letras) ? NO es VERDAD : es FALSO
var longitud = "hola" > "saludo" ? "hola es mas largo que saludo" : "saludo es mas largo que hola";


//mezclando un poco la funcion TYPEOF para conocer el tipo de dato que vamos a manejar:
//////////////////////////////////////////////////////////////////////
var persona = {nombre:"Cristhian", Apellido:"Lammoglia", edad:27};
document.writeln(typeof(persona));
document.writeln(typeof(longitud));
document.writeln(typeof(resultado));
document.writeln(typeof(a, b));
var diccionario = [{sexo:"Hombre"},{año:1993}];
document.writeln(typeof(diccionario));
var frutas = String(["coco","manzana","durazno","banana"]); //sin el STRING lo lee como un Object
document.writeln(typeof((frutas)));
var frutasJSON = JSON.stringify(frutas);
document.writeln(typeof(frutasJSON));
//////////////////////////////////////////////////////////////////////