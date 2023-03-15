/*Ejercicio opcional Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻 :
Crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) la PC elija aleatoriamente un 
movimiento y al final mostrar por pantalla quien gano, luego preguntar si queremos jugar otra vez.*/


function seleccionUsuario() {
    let seleccion = prompt('                        Juego!! 🪄🪄🪄  \n\n piedra (👊🏻), papel (✋🏻) o tijera (✌🏻) \n\n Escribe la palabre del elemento elegido:');
    seleccion = seleccion.toLowerCase();
    if (seleccion !== 'piedra' && seleccion !== 'papel' && seleccion !== 'tijera') {
      alert('Selecciona una opción válida');
      return seleccionUsuario();
    }
    return seleccion;
  }
  
  function seleccionComputadora() {
    let opciones = ['piedra', 'papel', 'tijera'];
    let indice = Math.floor(Math.random() * 3);
    return opciones[indice];
  }
  
  function ganador(usuario, computadora) {
    if (usuario === computadora) {
      return 'Empate! 🙂';
    } else if (usuario === 'piedra' && computadora === 'tijera' ||
               usuario === 'papel' && computadora === 'piedra' ||
               usuario === 'tijera' && computadora === 'papel') {
      return '¡Ganaste!😊 ';
    } else {
      return 'Perdiste ☹️';
    }
  }
  
  function jugar() {
    let usuario = seleccionUsuario();
    let computadora = seleccionComputadora();
    let resultado = ganador(usuario, computadora);
    alert('Tú elegiste ' + usuario + ', la computadora eligió ' + computadora + '.\n\n' + resultado);
    confirmar();
  }

  function confirmar(){
    let continuar = confirm('¿Quieres intentarlo de nuevo?');

        if (continuar === true){
            jugar();
        }
    }

  
  jugar();
  
  
  