
let puntos = 50;

document.getElementById('jugarBtn').addEventListener('click', function() {
  if (puntos < 50) {
    alert("No tienes suficientes puntos para jugar.");
    return;
  }

  const numeroGanador = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100

  const intento = prompt("Adivina el número (entre 1 y 100):");

  if (intento === null) {
    return; // El usuario canceló el juego
  }

  const numeroUsuario = parseInt(intento);

  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
    alert("Por favor, ingresa un número válido entre 1 y 100.");
    return;
  }

  puntos -= 50;

  if (numeroUsuario === numeroGanador) {
    puntos += 100;
    document.getElementById('resultado').innerText = `¡Ganaste 100 puntos!`;
  } else {
    document.getElementById('resultado').innerText = `Perdiste. El número correcto era ${numeroGanador}.`;
  }

  document.getElementById('puntos').innerText = puntos;

  if (puntos < 50) {
    alert("Te has quedado sin puntos. El juego ha terminado.");
  }
});
