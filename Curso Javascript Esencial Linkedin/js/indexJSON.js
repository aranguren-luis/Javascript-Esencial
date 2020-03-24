"use strict"

//alert('Probando JSON')

var nombre = {nombre:'Cristhian', apellido:'Lammoglia'} //consola lo lee como objeto

var nombres = [{nombre:'Cristina'},{nombre:'Alex'},{nombre:'Daniel'}, nombre] //consola lo lee como objetos

var nombresJSON = JSON.stringify(nombres); //consola lo lee como string ahora

var nuevosNombres = JSON.parse(nombresJSON); //consola lo vuelve a leer como objeto

