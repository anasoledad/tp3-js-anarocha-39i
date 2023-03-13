/*4- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.*/

function tablaDeMultiplicar(numero){
    for(let i = 1; i <= 10; i++){
        // let resultado = ;
        document.write(`<p>${numero} * ${i} = ${numero*i}</p>`)
    }
}

let numeroElegido;
do{
    numeroElegido = parseInt(prompt('Ingrese un numero para mostrar su tabla de multiplicar'));
    if (isNaN(numeroElegido)) {
        alert('Ingrese un número válido');
    }  
}while(isNaN(numeroElegido));

document.write(`<h3>Tabla de Multiplicar del ${numeroElegido}</h3>`)
tablaDeMultiplicar(numeroElegido);


// let num;

// do {
//   num = prompt("Ingrese un número para mostrar su tabla de multiplicar del 1 al 10:");

//   if (isNaN(num)) {
//     alert("Por favor, ingrese un número válido.");
//   }
// } while (isNaN(num));

// function mostrarTabla(num) {
//   for (let i = 1; i <= 10; i++) {
//     document.write(`${num} x ${i} = ${num * i}`);
//   }
// }

// mostrarTabla(num);
