
Definir las preguntas y respuestas
const preguntas = [
    {
        pregunta: "¿Cuánto es 2 + 2?",
        respuesta: "4"
    },
    {
        pregunta: "¿Cuánto es 5 * 3?",
        respuesta: "15"
    },
    {
        pregunta: "¿Cuánto es 10 - 7?",
        respuesta: "3"
    },
    {
        pregunta: "¿Cuánto es 8 / 2?",
        respuesta: "4"
    },
    {
        pregunta: "¿Cuánto es 3 al cuadrado?",
        respuesta: "9"
    }
   
];


// Función para jugar el juego de preguntas y respuestas
function jugar() {
    alert("¡Hola! Bienvenido al juego de preguntas y respuestas.");

    // Iterar sobre todas las preguntas
    for (let i = 0; i < preguntas.length; i++) {
        const preguntaActual = preguntas[i];

        // Pedir respuesta al usuario
        let respuestaUsuario = prompt(preguntaActual.pregunta);

        // Verificar si la respuesta es correcta
        if (respuestaUsuario && respuestaUsuario.toLowerCase() === preguntaActual.respuesta.toLowerCase()) {
            alert("¡Respuesta correcta!");
        } else {
            alert("Respuesta incorrecta. La respuesta correcta era: " + preguntaActual.respuesta);
        }
    }

    alert("¡Gracias por jugar!");
}

// Iniciar el juego
jugar();

