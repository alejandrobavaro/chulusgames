// Generar un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let puntos = 100;

function adivinarNumero() {
  const numeroInput = document.getElementById('numeroInput').value;
  const mensaje = document.getElementById('mensaje');
  
  // Incrementar el contador de intentos
  intentos++;

  // Verificar si el número ingresado es igual al número secreto
  if (numeroInput == numeroSecreto) {
    if (intentos === 1) {
      mensaje.textContent = `¡Felicitaciones! Adivinaste el número en el primer intento. ¡Eres un genio!`;
    } else {
      mensaje.textContent = `¡Correcto! Adivinaste el número en ${intentos} intentos. ¡Bien hecho!`;
    }
    // Otorgar puntos según la cantidad de intentos
    puntos -= intentos * 10;
    mensaje.textContent += ` Has ganado ${puntos} puntos.`;
    reiniciarJuego();
  } else if (numeroInput < numeroSecreto) {
    mensaje.textContent = `El número es mayor que ${numeroInput}. Intenta nuevamente.`;
  } else {
    mensaje.textContent = `El número es menor que ${numeroInput}. Intenta nuevamente.`;
  }
}

function reiniciarJuego() {
  // Reiniciar los valores para un nuevo juego
  intentos = 0;
  puntos = 100;
  // Generar un nuevo número aleatorio
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
}
