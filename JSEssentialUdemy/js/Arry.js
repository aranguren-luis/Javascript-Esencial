"use strict"

//Repasando Arreglos en JS

var array = 
    [
        "Cadena 4lfanum3ric4", 
        1993, 
        "Enero", 
        { carro : "Ford" },
        [ "MiniArray", 2020 ],
        function(){return "Función Vacía"}
    ];

console.log( "La variable array es de tipo :", typeof( array ) );
console.log( "¿la variable/objeto array es un arreglo?" , Array.isArray( array ) );

//A continuación llamamos algunos valores del array
// Y también modificamos algunos de esos valores

console.log( "LOS VALORES DEL ARRAY SON: " );
for (var i = 0; i < array.length; i++)
    {
        console.log( "Posición", i, array[i], "Tipo: ", typeof(array[i]) );
        document.getElementById( "OrderedList" ).innerHTML += "<li>" + array[i] + "</li>";
    };

array[3] = "Era tipo Objeto Ahora Es String";
console.log( "* Posición 3 del Array: ", array[3] );
array.sort;  //organiza el array
array.shift; //Orden aleatorio en el array
console.log(array);





