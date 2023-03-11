/*2- Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.*/

let ciudad;
let arrayCiudades = [];

do{
    ciudad = prompt('Ingrese el nombre de una ciudad');
    if(ciudad!=null){
        arrayCiudades.push(' ' + ciudad);
    }
}while(ciudad!=null);

document.write('<h2>Array de Ciudades</h2>')
document.write(arrayCiudades);

document.write(`<h4>Cantidad de ciudades: ${arrayCiudades.length}</h4>`)

document.write(`<p>Elemento en la primera posición: ${arrayCiudades[0]}</p>`);
document.write(`<p>Elemento en la tercera posición: ${arrayCiudades[2]}</p>`);
document.write(`<p>Elemento en la última posición: ${arrayCiudades[arrayCiudades.length-1]}</p>`);

document.write('<h3>Array de Ciudades: Se agregó París</h3>')
arrayCiudades.push(' París')
document.write(arrayCiudades);

document.write('<h3>Array de Ciudades: Se agregó Barcelona en la segunda posición</h3>')
arrayCiudades.splice(1, 1, ' Barcelona')
document.write(arrayCiudades);
