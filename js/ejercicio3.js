/*3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la
función Math.random para obtener números aleatorios entre 1 y 6 para cada uno
de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y
anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces
esta operación.*/

let suma = 0;
let arraySuma = [];

document.write(`<h2>Lanzamientos de Dados</h2>`);

document.write('<table><tbody>');
let cont =1;
    for(let indiceFila =0; indiceFila < 5 ; indiceFila++){
        document.write('<tr>')
        
        for(let indiceColumna=0; indiceColumna < 10; indiceColumna++){
            
            document.write(`<td>`);
            document.write(`<h4>Lanzamiento ${cont++}</h4>`);
            let dado1 = Math.floor(Math.random() * 6) + 1;
            let dado2 = Math.floor(Math.random() * 6) + 1;
            document.write(`<p>Dado 1:  ${dado1}</p>`);
            document.write(`<p>Dado 2:  ${dado2}</p>`);
            suma = dado1 + dado2;
            document.write(`<p>Suma:  ${suma}</p>`);
            arraySuma.push(' '+suma);
            document.write(`</td>`);
        }
        document.write('</tr>')
     }  
document.write('</tbody> </table>');

document.write(`<h3>Array de sumas de cada lanzamiento</h3>`);
document.write(arraySuma);

document.write(`<h3>Elementos repetidos del array</h3>`);
let contadores = [0,0,0,0,0,0,0,0,0,0,0,0,0];
for (let i = 2; i < contadores.length; i++) {

    for (let j = 0; j <arraySuma.length; j++) {
      if (i == arraySuma[j]) {
        contadores[i] = contadores[i] + 1;
      }
    }
    document.write(`<p>El numero ${i} se repite ${contadores[i]} veces</p>`);
  }

