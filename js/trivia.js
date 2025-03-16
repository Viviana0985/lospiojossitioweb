document.addEventListener("DOMContentLoaded", function () {
    const preguntaTexto = document.getElementById("pregunta");
    const opcionesContenedor = document.getElementById("opciones");
    const resultadoTexto = document.getElementById("resultado");
    const puntajeTexto = document.getElementById("puntaje");
    const jugarNuevoBtn = document.getElementById("jugar-nuevo-btn");
    const iniciarJuegoBtn = document.getElementById("iniciar-juego-btn");
    const finalizarJuegoBtn = document.getElementById("finalizar-juego-btn");
    
    let puntaje = 0;
    let intentos = 3;

    const preguntas = [
        { pregunta: "¿En qué año se formó la banda Los Piojos?", opciones: ["1985", "1988", "1990", "1992"], respuesta: "1988" },
        { pregunta: "¿En qué localidad se originó la banda Los Piojos?", opciones: ["La Plata", "Ciudad Jardín Lomas del Palomar", "Rosario", "Mar del Plata"], respuesta: "Ciudad Jardín Lomas del Palomar" },
        { pregunta: "¿Quién era el vocalista principal de Los Piojos?", opciones: ["Gustavo Kupinski", "Andrés Ciro Martínez", "Daniel Fernández", "Miguel Rodríguez"], respuesta: "Andrés Ciro Martínez" },
        { pregunta: "¿Cómo se llama el primer álbum de Los Piojos?", opciones: ["Ay Ay Ay", "Chactuchac", "Tercer Arco", "Verde Paisaje del Infierno"], respuesta: "Chactuchac" },
        { pregunta: "¿En qué año lanzaron el álbum 'Tercer Arco'?", opciones: ["1994", "1995", "1996", "1997"], respuesta: "1996" },
        { pregunta: "¿Qué canción de Los Piojos está dedicada a Diego Maradona?", opciones: ["Muévelo", "Maradó", "Bicho de Ciudad", "Ruleta"], respuesta: "Maradó" },
        { pregunta: "¿Cuál fue el último álbum de estudio de Los Piojos?", opciones: ["Azul", "Máquina de Sangre", "Civilización", "Huracanes en Luna Plateada"], respuesta: "Civilización" },
        { pregunta: "¿En qué año se disolvió inicialmente la banda Los Piojos?", opciones: ["2005", "2007", "2009", "2011"], respuesta: "2009" },
        { pregunta: "¿Cuál es el nombre del guitarrista fallecido de Los Piojos?", opciones: ["Daniel Fernández", "Gustavo Kupinski", "Miguel Rodríguez", "Sebastián Cardero"], respuesta: "Gustavo Kupinski" },
        { pregunta: "¿Qué integrante de Los Piojos fundó 'Ciro y Los Persas'?", opciones: ["Daniel Fernández", "Gustavo Kupinski", "Andrés Ciro Martínez", "Miguel Rodríguez"], respuesta: "Andrés Ciro Martínez" },
        { pregunta: "¿Qué integrante de Los Piojos formó la banda 'La Franela'?", opciones: ["Daniel Fernández", "Sebastián Cardero", "Miguel Rodríguez", "Gustavo Kupinski"], respuesta: "Daniel Fernández" },
        { pregunta: "¿Cómo se llama el álbum en vivo lanzado en 1997?", opciones: ["Azul", "Ritual", "Máquina de Sangre", "Verde Paisaje del Infierno"], respuesta: "Ritual" },
        { pregunta: "¿Qué álbum de Los Piojos fue presentado en la Avenida Corrientes?", opciones: ["Máquina de Sangre", "Civilización", "Verde Paisaje del Infierno", "Azul"], respuesta: "Civilización" },
        { pregunta: "¿Cómo se llama el sello discográfico independiente de Los Piojos?", opciones: ["El Farolito Discos", "Piojo Records", "Ciudad Babilonia", "Los Piojos Music"], respuesta: "El Farolito Discos" },
        { pregunta: "¿En qué festival tocaron Los Piojos en 2006?", opciones: ["Pepsi Music", "Cosquín Rock", "Quilmes Rock", "Rock al Parque"], respuesta: "Quilmes Rock" },
        { pregunta: "¿En qué estadio se realizó el último recital de Los Piojos?", opciones: ["Estadio de Vélez Sarsfield", "Estadio Monumental", "Estadio de Boca Juniors", "Estadio Único de La Plata"], respuesta: "Estadio Monumental" },
        { pregunta: "Perdido en el techo del tren siento ______ y siento poder", opciones: ["una ciudad", "bestia de metal", "libertad", "quema como el sol"], respuesta: "libertad" },
        { pregunta: "¿Cuál de estas canciones NO pertenece a 'Azul'?", opciones: ["Sucio Can", "Go Negro Go", "Vals Inicial", "Angelito"], respuesta: "Angelito" },
        { pregunta: "¿Quién es la persona que está en la portada del álbum 'Verde Paisaje del Infierno'?", opciones: ["Pappo", "Tavo Kupinski", "Ciro Martínez", "Osky Sofio"], respuesta: "Osky Sofio" },
        { pregunta: "Critican tu arte y son de ninguna parte Cambian dinero por _____", opciones: ["cielo", "sol", "tiempo", "sensibilidad"], respuesta: "sensibilidad" },
        { pregunta: "Era la noche, justa, inevitable Eran tus _____ llamando mi atención", opciones: ["amores", "lámparas", "botas", "superficies"], respuesta: "botas" }
    ];

    function iniciarJuego() {
        puntaje = 0;
        intentos = 3;
        puntajeTexto.textContent = `Puntaje: ${puntaje}`;
        resultadoTexto.textContent = "";
        jugarNuevoBtn.classList.add("d-none");
        iniciarJuegoBtn.classList.add("d-none");
        finalizarJuegoBtn.classList.remove("d-none");
        mostrarPregunta();
    }

    function mostrarPregunta() {
        const preguntaActual = preguntas[Math.floor(Math.random() * preguntas.length)];
        preguntaTexto.textContent = preguntaActual.pregunta;
        opcionesContenedor.innerHTML = "";

        preguntaActual.opciones.forEach(opcion => {
            const boton = document.createElement("button");
            boton.textContent = opcion;
            boton.classList.add("btn", "btn-outline-danger", "m-2");
            boton.addEventListener("click", () => {
                // Bloquear todos los botones después de que se haga clic
                bloquearBotones();
                verificarRespuesta(opcion, preguntaActual.respuesta);
            });
            opcionesContenedor.appendChild(boton);
        });
    }

    function bloquearBotones() {
        const botones = opcionesContenedor.querySelectorAll("button");
        botones.forEach(boton => {
            boton.disabled = true; // Bloquear todos los botones
        });
    }

    // Función corregida de verificarRespuesta
    function verificarRespuesta(opcionSeleccionada, respuestaCorrecta) {
        if (opcionSeleccionada === respuestaCorrecta) {
            puntaje += 10;
            resultadoTexto.textContent = "✅ ¡Correcto!";
            resultadoTexto.style.color = "green";
        } else {
            intentos--;
            puntaje -= 2;
            resultadoTexto.textContent = "❌ Incorrecto.";
            resultadoTexto.style.color = "red";
        }

        puntajeTexto.textContent = `Puntaje: ${puntaje}`;

        if (intentos === 0) {
            resultadoTexto.textContent = "¡Perdiste! Inténtalo de nuevo.";
            jugarNuevoBtn.classList.remove("d-none");
            finalizarJuegoBtn.classList.add("d-none");
        } else {
            setTimeout(() => {
                resultadoTexto.textContent = ""; // Borra el mensaje tras 2 segundos
                mostrarPregunta();
            }, 2000);
        }
    }

    function reiniciarJuego() {
        iniciarJuego();
    }

    function finalizarJuego() {
        jugarNuevoBtn.classList.add("d-none");
        finalizarJuegoBtn.classList.add("d-none");
        iniciarJuegoBtn.classList.remove("d-none");  // Asegúrate de mostrar el botón de "Iniciar Juego"
        preguntaTexto.textContent = "";
        opcionesContenedor.innerHTML = "";
        resultadoTexto.textContent = "Juego finalizado. Presiona 'Iniciar Juego' para jugar otra vez.";
    }

    iniciarJuegoBtn.addEventListener("click", iniciarJuego);
    jugarNuevoBtn.addEventListener("click", reiniciarJuego);
    finalizarJuegoBtn.addEventListener("click", finalizarJuego);
});
