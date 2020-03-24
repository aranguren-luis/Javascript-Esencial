"use strict"
//Script para calcular la letra del DNI de los usuarios, según el Nº

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y',
 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q',
  'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function CalcularLetraDNI(){
    var numero     = document.getElementById('input1').value; 
    var resultado  = numero%23;
    const letradni = letras[resultado];
    document.getElementById('resultado').innerHTML = numero+"-"+letradni;
};