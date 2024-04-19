// Puntos del jugador
let puntos = 100; // Inicialmente 100 puntos
let puntosApuesta = 50; // Puntos apostados en cada juego

// Función para generar un número aleatorio basado en los números restantes en el tablero
function generarNumeroRestante(numerosRestantes) {
    let numeroAleatorio = Math.floor(Math.random() * numerosRestantes.length);
    return numerosRestantes.splice(numeroAleatorio, 1)[0];
}

// Función para generar un número aleatorio entre 1 y 75
function generarNumero() {
    return Math.floor(Math.random() * 75) + 1;
}

// Función para generar un cartón de bingo
function generarCarton() {
    let carton = [];
    while (carton.length < 25) {
        let numero = generarNumero();
        if (!carton.includes(numero)) {
            carton.push(numero);
        }
    }
    return carton;
}

// Función para crear y mostrar el cartón en la interfaz
function mostrarCarton(carton, id) {
    let cartonHTML = '';
    for (let i = 0; i < carton.length; i++) {
        cartonHTML += '<div id="' + id + '-' + carton[i] + '">' + carton[i] + '</div>';
    }
    document.getElementById(id).innerHTML = cartonHTML;
}

// Función para marcar un número en un tablero
function marcarNumero(numero, tablero) {
    document.getElementById(tablero + '-' + numero).classList.add('marked');
}

// Función para llamar un número nuevo
function llamarNumero() {
    let numerosRestantes = []; // Números restantes en el tablero
    for (let i = 1; i <= 75; i++) {
        if (!document.getElementById('tablero-general-' + i).classList.contains('marked')) {
            numerosRestantes.push(i);
        }
    }

    if (numerosRestantes.length === 0) {
        Swal.fire({
            title: '¡Todos los números han sido llamados!',
            text: 'Juego terminado.',
            icon: 'info'
        });
        return;
    }

    let numero = generarNumeroRestante(numerosRestantes);
    let llamadoDiv = document.getElementById('llamado');
    llamadoDiv.innerHTML = '¡' + numero + '!';
    marcarNumero(numero, 'tablero-general');
    marcarNumero(numero, 'carton');

    // Verificar si el jugador ha completado el cartón
    let cartonCompleto = true;
    let cartonJugador = document.getElementById('carton').querySelectorAll('div');
    for (let i = 0; i < cartonJugador.length; i++) {
        if (!cartonJugador[i].classList.contains('marked')) {
            cartonCompleto = false;
            break;
        }
    }

    // Mostrar mensaje de final del juego si el cartón está completo
    if (cartonCompleto) {
        puntos += 100; // Ganar 100 puntos
        Swal.fire({
            title: '¡Bingo! Ganaste 100 puntos.',
            text: 'Ahora tienes ' + puntos + ' puntos. ¿Deseas volver a jugar por ' + puntosApuesta + ' puntos?',
            icon: 'success',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                // Apostar puntos para el próximo juego
                puntos -= puntosApuesta;
                // Reiniciar el juego
                reiniciarJuego();
            } else {
                // Agradecer al jugador y mostrar "Game Over"
                Swal.fire({
                    title: '¡Gracias por jugar!',
                    text: 'Game Over',
                    icon: 'info'
                });
            }
        });
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    let cartonJugador = generarCarton();
    mostrarCarton(cartonJugador, 'carton');

    // Reiniciar el tablero general
    let numerosGenerales = [];
    for (let i = 1; i <= 75; i++) {
        numerosGenerales.push(i);
    }
    mostrarCarton(numerosGenerales, 'tablero-general');
}

// Event listener para el botón "Llamar Número"
document.getElementById('llamar-numero').addEventListener('click', llamarNumero);

// Mostrar el cartón cuando se carga la página
let cartonJugador = generarCarton();
mostrarCarton(cartonJugador, 'carton');

// Mostrar todos los números en el tablero general
let numerosGenerales = [];
for (let i = 1; i <= 75; i++) {
    numerosGenerales.push(i);
}
mostrarCarton(numerosGenerales, 'tablero-general');
