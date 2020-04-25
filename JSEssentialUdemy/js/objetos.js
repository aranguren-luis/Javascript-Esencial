"use strict"
//Creamos un objeto llamado protatil que contienen propiedades y métodos
var portatil = 
                {   
                    //Propiedades del objeto portatil
                    marca      : "Microsoft",
                    modelo     : "Surface Pro 7",
                    color      : "Negro",
                    teclado    : [ "qwerty", "numérico" ], //Esto es un arreglo dentro de un objeto
                    //procesador es una propiedad del objeto portatil, que a su vez es otro objeto
                    procesador : 
                                    {
                                        marca   : "Intel",
                                        modelo  : "i7",
                                        procesa : function(){ return "procesando"; } //procesa es una función
                                    },
                    //Estas son las funciones/métodos del objeto portatil
                    encender   : function(){ return "Portatil Encendido"; },
                    apagar     : function(){ return "Portatil Apagado"; }
                };

console.log( portatil );
console.log( "Portatil es de tipo: ", typeof( portatil ) );
console.log( "Procesador es de tipo:", typeof( portatil.procesador ) );
console.log( "Teclado es un Array: ", Array.isArray( portatil.teclado ) );
console.log( "¿", portatil.encender(), "ó ", portatil.apagar(), "?" );
//console.log( portatil.hibernar() ); NO FUNCIONA xq hibernar() fue declarada más tarde

//Incorporar una propiedad o método al objeto existente
portatil.año = 2020;
portatil.hibernar = function(){ return "Portatil en Modo Hibernación"; };

console.log( portatil.marca, portatil.modelo," fue creada en el año ", portatil.año );
console.log( portatil.hibernar() );

