/*1- Escribir el código de una función a la que se pasa como parámetro un número
entero y devuelve como resultado una cadena de texto que indica si el número es
par o impar. Mostrar por pantalla el resultado devuelto por la función.*/

function esPar(numero){
    let mensaje;
    if (numero%2===0){
         mensaje='es par';
    }else{
        mensaje='es impar';
    }
    return mensaje;
}
let num;
do{
    num = parseInt(prompt('Ingrese un número'));
    if (isNaN(num)) {
        alert('Ingrese un número válido');
    }  
}while(isNaN(num));

document.write(`<h4>El número ${num} ${esPar(num)}</h4>`);


