"use strict"
//Script para calcular la letra del DNI de los usuarios, según el Nº

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y',
 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q',
  'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function CalcularLetraDNI(){
  try{
      var numero     = document.getElementById('input1').value; 
      var resultado  = numero%23;
      const letradni = letras[resultado];
      if (numero.length<8){
        alert("Error");
      }
      else{
        document.getElementById('resultado').innerHTML = numero+"-"+letradni;
      }
       
    }

  catch{
    alert("¡Ups! Error en la función Calcular DNI");
  }   
};

function CalcularLetraNIE(){
  try{
      var numero1    = document.getElementById('input1').value;
      var resultado1 = numero1%12;
      let letranie   = resultado1 <= 15 ? "Y" : "B";
      if(numero1.length<7){alert("Error")}
      else{
        document.getElementById("resultado1").innerHTML = numero1+"-"+letranie;
      }
    }
  catch{
    alert("¡Ups! Error en la función Calcular NIE")
  };
};