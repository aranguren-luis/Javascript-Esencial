"use strict"
console.log("Let's Start Javascript");

var carro = 
    {
        color :"",
        marca :"",
        placa :"",
        alto  :"",
        ancho :"",
        claxo    : function(){ return "cornetazo!" },
        encendido: function(){ return "carro encendido" },
        apagado  : function(){ return "coche apagado" },
        acelerar : function(){ return "acelerando" },
        frenar   : function(){return "frenando"}
    };

carro.color = "rojo";
carro.marca = "ford";
carro.placa = "XYZ123-V";
carro.alto  = 2.0;
carro.ancho = 2.5;

function semaforo()
    {
        var red   = document.getElementById( "red" );
        var green = document.getElementById( "green" );
        var stop  = document.getElementById( "stop" );

        red.onclick   = function(){ console.log( carro.apagado() )};
        green.onclick = function(){ console.log( carro.acelerar() )};
        stop.onclick  = function(){ console.log( carro.frenar() )};


    };
