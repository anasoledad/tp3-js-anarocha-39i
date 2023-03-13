/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
● La fórmula del perímetro es p = 2*(a +b)*/

function calcularPerimetro (a, b){
    let perimetro = 2*(a + b);
    return(perimetro);
}

let base = parseInt(prompt('Ingrese el valor de la base del rectángulo'));
let altura = parseInt(prompt('Ingrese el valor de la altura del rectángulo'));

document.write('<h3>Perímetro de un rectángulo</h3>');
document.write(`<h4>Base: ${base}</h4>`);
document.write(`<h4>Altura: ${altura}</h4>`);
document.write(`<p>El perímetro es: ${calcularPerimetro(base, altura)}</p>`);