
    // Función para verificar si la respuesta es correcta
function verificarRespuesta(respuestaUsuario, respuestaCorrecta) {
    return respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase();
}

// Función para jugar al juego de música
function jugarJuegoMusica() {
    alert("Hola! Bienvenido al juego de conocimientos de música!");
    let nombreUsuario = prompt("Por favor, ingresa tu nombre:");
   alert("Hola " + nombreUsuario + ", comencemos el juego");

   
   let generoMusical = prompt("¿Te gusta el reggaeton, el pop o el rock?");
   
    let preguntasRespuestas = [];
    let intentos = 0;

    switch (generoMusical.toLowerCase()) {
        case "reggaeton":
            preguntasRespuestas = [
                { pregunta: "¿Quién canta la canción 'Despacito'?, (Pista primera letra: L...)", respuesta: "Luis Fonsi" },
                { pregunta: "¿Qué país vio nacer el reggaeton?, (Pista primera letra: P...)", respuesta: "Puerto Rico" },
                { pregunta: "¿Quién colabora con Shakira en la canción 'Chantaje'?, (Pista primera letra: M...)", respuesta: "Maluma" }
            ];
            break;
        case "pop":
            preguntasRespuestas = [
                { pregunta: "¿Quién es conocida como la 'Reina del Pop'?, (Pista primera letra: M...)", respuesta: "Madonna" },
                { pregunta: "¿Quién es conocido como 'El Rey del Pop'?, (Pista primera letra: M...)", respuesta: "Michael Jackson" },
                { pregunta: "¿Quién es el cantante de la famosa canción 'Shape of You'?, (Pista primera letra: E...)", respuesta: "Ed Sheeran" }
            ];
            break;
        case "rock":
            preguntasRespuestas = [
                { pregunta: "¿Cuál es el nombre de la banda liderada por Freddie Mercury?, (Pista primera letra: Q...)", respuesta: "Queen" },
                { pregunta: "¿Quién es el guitarrista principal de la banda Guns N' Roses?, (Pista primera letra: S...)", respuesta: "Slash" },
                { pregunta: "¿Qué banda de rock lanzó el álbum 'The Dark Side of the Moon'?, (Pista primera letra: P...)", respuesta: "Pink Floyd" }
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


// Conjunto de preguntas y respuestas sobre diferentes géneros musicales
const preguntasRespuestas = [
    { pregunta: "¿En qué estilo de música se utiliza la guitarra eléctrica con distorsión?, (Pista primera letra: R...)", respuesta: "rock" },
    { pregunta: "¿En qué estilo de música se utiliza el violín?,(Pista primera letra: C...)", respuesta: "clasica" },
    { pregunta: "¿En qué estilo de música se utiliza la trompeta?, (Pista primera letra: J...)" , respuesta: "jazz" },
    { pregunta: "¿En qué estilo de música se utiliza el charango?, (Pista primera letra: F...)", respuesta: "folklore" },
    // Agrega más preguntas y respuestas aquí
];

// Función para jugar al juego de conocimientos musicales
function jugarJuego() {
    alert("¡Bienvenido a la segunda parte del juego de conocimientos de música!");

    let intentos = 0;

    while (preguntasRespuestas.length > 0) {
        // Seleccionar una pregunta aleatoria
        const indicePregunta = Math.floor(Math.random() * preguntasRespuestas.length);
        const preguntaActual = preguntasRespuestas[indicePregunta];

        let respuestaUsuario;
        do {
            respuestaUsuario = prompt(preguntaActual.pregunta);
            intentos++;
            if (!verificarRespuesta(respuestaUsuario, preguntaActual.respuesta)) {
                alert("Respuesta incorrecta. Inténtalo de nuevo.");
            }
        } while (!verificarRespuesta(respuestaUsuario, preguntaActual.respuesta));

        // Eliminar la pregunta actual del conjunto
        preguntasRespuestas.splice(indicePregunta, 1);

        alert("¡Respuesta correcta! Has acertado el género musical para esta pregunta.");
    }

    alert("¡Felicidades! Has completado el juego en " + intentos + " intentos.");
}

// Función para verificar si la respuesta es correcta
function verificarRespuesta(respuestaUsuario, respuestaCorrecta) {
    return respuestaUsuario && respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase();
}

// Iniciar el juego
jugarJuego();


// Array de artistas por género musical
const artistasPorGenero = {
    rock: [
        { nombre: "Queen", informacion: "Queen es una banda británica de rock formada en 1970 en Londres por el guitarrista Brian May, el cantante Freddie Mercury y el baterista Roger Taylor, con el bajista John Deacon completando la formación al año siguiente." },
        { nombre: "Led Zeppelin", informacion: "Led Zeppelin fue un grupo británico de rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds, y el bajista John Paul Jones, junto a Robert Plant como vocalista y John Bonham a la batería." },
        { nombre: "The Beatles", informacion: "The Beatles fue una banda de rock inglesa, formada en Liverpool en 1960. Es uno de los grupos musicales más exitosos y aclamados en la historia de la música popular." },
        { nombre: "ACDC", informacion: "ACDC es una banda de hard rock originaria de Australia, formada en 1973 por los hermanos Angus y Malcolm Young. Es conocida por sus potentes actuaciones en vivo y sus icónicos riffs de guitarra." }
    ],
    pop: [
        { nombre: "Michael Jackson", informacion: "Michael Jackson, también conocido como el Rey del Pop, fue un cantante, compositor y bailarín estadounidense. Es uno de los artistas musicales más famosos e influyentes de todos los tiempos." },
        { nombre: "Madonna", informacion: "Madonna es una cantante, compositora, actriz y empresaria estadounidense. Es conocida como la 'Reina del Pop' y ha sido una figura importante en la música pop desde los años 80." },
        { nombre: "Britney Spears", informacion: "Britney Spears es una cantante, bailarina y actriz estadounidense. Conocida como la 'Princesa del Pop', ha sido una de las artistas más exitosas y reconocidas en la música pop." },
        { nombre: "Justin Timberlake", informacion: "Justin Timberlake es un cantante, compositor y actor estadounidense. Inició su carrera como miembro del grupo 'N Sync y luego continuó como solista, alcanzando gran éxito en la música pop y R&B." }
    ],
    reggaeton: [
        { nombre: "Daddy Yankee", informacion: "Daddy Yankee es un cantante, rapero, actor y productor discográfico puertorriqueño, conocido como el Rey del Reggaetón. Es uno de los artistas más influyentes del género." },
        { nombre: "J Balvin", informacion: "J Balvin es un cantante y compositor colombiano que ha sido una figura prominente en la escena del reggaetón y la música urbana latina. Es conocido por éxitos como 'Mi Gente' y 'Ay Vamos'." },
        { nombre: "Bad Bunny", informacion: "Bad Bunny es un cantante y rapero puertorriqueño que ha sido uno de los principales exponentes del reggaetón y la música urbana en los últimos años. Ha colaborado con varios artistas internacionales y ha lanzado numerosos éxitos." },
        { nombre: "Nicky Jam", informacion: "Nicky Jam es un cantante y compositor estadounidense de ascendencia puertorriqueña. Conocido por sus éxitos en el reggaetón y la música urbana latina, ha sido una figura importante en la escena musical desde los años 90." }
    ],
    clasica: [
        { nombre: "Ludwig van Beethoven", informacion: "Ludwig van Beethoven fue un compositor y pianista alemán considerado uno de los músicos más importantes de la historia. Su obra abarca desde el período clásico hasta el romántico, y es especialmente conocido por sus sinfonías y sonatas para piano." },
        { nombre: "Wolfgang Amadeus Mozart", informacion: "Wolfgang Amadeus Mozart fue un compositor austriaco del período clásico. Es considerado uno de los músicos más influyentes y prolíficos de la historia de la música occidental, y su obra abarca todos los géneros de su tiempo." },
        { nombre: "Johann Sebastian Bach", informacion: "Johann Sebastian Bach fue un compositor y músico alemán del período barroco. Es conocido por su habilidad en la composición coral e instrumental, y es considerado uno de los más grandes compositores de todos los tiempos." },
        { nombre: "Ludwig van Beethoven", informacion: "Ludwig van Beethoven fue un compositor y pianista alemán considerado uno de los músicos más importantes de la historia. Su obra abarca desde el período clásico hasta el romántico, y es especialmente conocido por sus sinfonías y sonatas para piano." }
    ]
};

// Función para buscar información sobre un artista por su nombre
function buscarInformacionArtista(nombreArtista) {
    for (let genero in artistasPorGenero) {
        const artistas = artistasPorGenero[genero];
        const artistaEncontrado = artistas.find(artista => artista.nombre.toLowerCase() === nombreArtista.toLowerCase());
        if (artistaEncontrado) {
            return artistaEncontrado.informacion;
        }
    }
    return "Lo siento, no se encontró información sobre ese artista.";
}

// Función para jugar al juego de búsqueda de información sobre artistas
function jugarJuegoBusquedaArtistas() {
    alert("¡Bienvenido a la tercera parte del juego de conocimientos de música!");

    let continuarJugando = true;

    while (continuarJugando) {
        let nombreArtista = prompt("Ingrese el nombre del artista del que desea obtener información. Mi base de datos es limitada, pero podré enseñarte acerca de los siguientes artistas: Queen, Led Zeppelin, The Beatles, ACDC, Michael Jackson, Madonna, Britney Spears, Justin Timberlake, Daddy Yankee, J Balvin, Bad Bunny, Ludwig van Beethoven, Wolfgang Amadeus Mozart, Johann Sebastian Bach. Escibe aqui tu opción:");
        const informacionArtista = buscarInformacionArtista(nombreArtista);
        alert(informacionArtista);

        continuarJugando = confirm("¿Desea buscar información sobre otro artista?");
    }

    alert("Gracias por jugar.");
}

// Iniciar la tercera parte del juego
jugarJuegoBusquedaArtistas();
