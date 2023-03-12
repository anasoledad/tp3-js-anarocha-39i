/*2- Definir una función que muestre información sobre una cadena de texto que se
le pasa como argumento. A partir de la cadena que se le pasa, la función
determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o
por una mezcla de ambas. */

function mostrarInformacion(cadena){
    if (cadena === cadena.toUpperCase()) {
        document.write('La cadena está formada sólo por mayúsculas.');
    }else if (cadena === cadena.toLowerCase()) {
        document.write('La cadena está formada sólo por minúsculas.');
    }else {
        document.write('La cadena está formada por una mezcla de mayúsculas y minúsculas.');
    }
}

let cadenaTexto = prompt('Ingrese una cadena de texto');

document.write('<h3>Cadena de texto ingresada</h3>');
document.write(`<h4>${cadenaTexto}</h4>`);
mostrarInformacion(cadenaTexto);