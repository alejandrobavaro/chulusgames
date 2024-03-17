let nombreIgresado = prompt ("Ingresar Nombre")
alert("el nombre ingresado es " + nombreIngresado)

// Definir las preguntas y respuestas
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuesta: "París"
    },
    {
        pregunta: "¿Cuánto es 2 + 2?",
        respuesta: "4"
    },
    {
        pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
        respuesta: "Miguel de Cervantes"
    },
    {
        pregunta: "¿Cuál es el planeta más grande del sistema solar?",
        respuesta: "Júpiter"
    },
    // Agregar más preguntas aquí
    {
        pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
        respuesta: "1939"
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
