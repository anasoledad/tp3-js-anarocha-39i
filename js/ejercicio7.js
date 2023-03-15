/*4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.*/


function tablaDeMultiplicar(numero){
    for(let i = 1; i <= 10; i++){
        document.write(`<p>${numero} * ${i} = ${numero*i}</p>`)
    }
}

function numeroElegido(){
    let numero = parseInt(prompt('Ingrese un numero para mostrar su tabla de multiplicar'));
    if (isNaN(numero)) {
        alert('Ingrese un número válido');
        return numeroElegido();
    }
    return numero;
}

let num = numeroElegido()
document.write(`<h3>Tabla de Multiplicar del ${num}</h3>`)
tablaDeMultiplicar(num);
