
    // Función para verificar si la respuesta es correcta
function verificarRespuesta(respuestaUsuario, respuestaCorrecta) {
    return respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase();
}

// Función para jugar al juego de música
function jugarJuegoMusica() {
    alert("Hola! Bienvenido al juego de conocimientos de música!");
    let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
    let edadUsuario = parseInt(prompt("Hola " + nombreUsuario + ", ¿cuántos años tienes?"));

    let generoMusical = prompt("¿Te gusta el reggaeton, el pop o el rock?");

    let preguntasRespuestas = [];
    let intentos = 0;

    switch (generoMusical.toLowerCase()) {
        case "reggaeton":
            preguntasRespuestas = [
                { pregunta: "¿Quién canta la canción 'Despacito'?, (Pista: Lu...)", respuesta: "Luis Fonsi" },
                { pregunta: "¿Qué país vio nacer el reggaeton?, (Pista: Pue...)", respuesta: "Puerto Rico" },
                { pregunta: "¿Quién colabora con Shakira en la canción 'Chantaje'?, (Pista: Ma...)", respuesta: "Maluma" }
            ];
            break;
        case "pop":
            preguntasRespuestas = [
                { pregunta: "¿Quién es conocida como la 'Reina del Pop'?, (Pista: Mad...)", respuesta: "Madonna" },
                { pregunta: "¿Quién es conocidao como 'El Rey del Pop'?, (Pista: Michael J...)", respuesta: "Michael Jackson" },
                { pregunta: "¿Quién es el cantante de la famosa canción 'Shape of You'?, (Pista: Ed S...)", respuesta: "Ed Sheeran" }
            ];
            break;
        case "rock":
            preguntasRespuestas = [
                { pregunta: "¿Cuál es el nombre de la banda liderada por Freddie Mercury?", respuesta: "Queen" },
                { pregunta: "¿Quién es el guitarrista principal de la banda Guns N' Roses?", respuesta: "Slash" },
                { pregunta: "¿Qué banda de rock lanzó el álbum 'The Dark Side of the Moon'?", respuesta: "Pink Floyd" }
            ];
            break;
        default:
            alert("No es un género válido. Elige entre reggaeton, pop o rock.");
            return;
    }

    alert("¡Ahora sí, a jugar!");

    for (let i = 0; i < preguntasRespuestas.length; i++) {
        let respuestaUsuario;
        do {
            respuestaUsuario = prompt(preguntasRespuestas[i].pregunta);
            intentos++;
            if (!verificarRespuesta(respuestaUsuario, preguntasRespuestas[i].respuesta)) {
                alert("Respuesta incorrecta. Inténtalo de nuevo.");
            }
        } while (!verificarRespuesta(respuestaUsuario, preguntasRespuestas[i].respuesta));

        alert("¡Respuesta correcta! Has ganado esta pregunta.");
    }

    alert("¡Felicidades " + nombreUsuario + "! Has completado el juego en " + intentos + " intentos.");
}

// Iniciar el juego
jugarJuegoMusica();
