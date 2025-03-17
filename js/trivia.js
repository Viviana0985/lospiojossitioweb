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
        { pregunta: "Era la noche, justa, inevitable Eran tus _____ llamando mi atención", opciones: ["amores", "lámparas", "botas", "superficies"], respuesta: "botas" },
        {pregunta: "¿En qué año se lanzó el álbum 'Ay Ay Ay'?",opciones: ["1992", "1993", "1994", "1995"],respuesta: "1994"},
        {pregunta: "¿En qué año se lanzó el álbum 'Tercer Arco'?", opciones: ["1994", "1995", "1996", "1997"], respuesta: "1996"},
        {pregunta: "¿Dónde se presentó a la prensa el álbum 'Tercer Arco'?", opciones: ["Teatro Arpegios", "Luna Park", "Teatro Gran Rex", "Estadio de Obras"], respuesta: "Teatro Arpegios"},
        {pregunta: "¿Cuál fue el primer corte de difusión de 'Tercer Arco'?", opciones: ["Maradó", "El farolito", "Esquina Libertad", "Verano del '92"], respuesta: "El farolito"},
        {pregunta: "¿En qué ciudad comenzó Los Piojos el 2008 con un show en la playa?", opciones: ["Mar del Plata", "Pinamar", "Villa Gesell", "Necochea"], respuesta: "Mar del Plata"},
        {pregunta: "¿Cuántos discos de platino alcanzó 'Tercer Arco' en poco tiempo?", opciones: ["Uno", "Doble platino", "Triple platino", "Cuádruple platino"], respuesta: "Doble platino"},
        {pregunta: "¿Cuál de estas canciones de 'Tercer Arco' llegó al top ten de MTV?", opciones: ["Esquina Libertad", "Tan solo", "Maradó", "Ando ganas"], respuesta: "Maradó"},
        {pregunta: "¿Cuál fue otro videoclip de 'Tercer Arco' que llegó al top ten de MTV?", opciones: ["Babilonia", "Verano del '92", "Gris", "Todo pasa"], respuesta: "Verano del '92"},
        {pregunta: "¿En qué estadio tocaron Los Piojos por primera vez después del éxito de 'Tercer Arco'?", opciones: ["Estadio de Ferro", "Estadio de Obras", "Parque Sarmiento", "Microestadio de Racing"], respuesta: "Estadio de Obras"},
        {pregunta: "¿En qué año Los Piojos hicieron sus primeros shows en el Estadio de Obras?", opciones: ["1994", "1995", "1996", "1997"], respuesta: "1996"},
        {pregunta: "¿Cuántas veces se presentaron en el Microestadio de Ferro en noviembre de 1996?", opciones: ["Una vez", "Dos veces", "Tres veces", "Cuatro veces"], respuesta: "Dos veces"},
        {pregunta: "¿Cuántos shows hicieron en el Estadio de Obras a finales de 1996?", opciones: ["Uno", "Dos", "Tres", "Cuatro"], respuesta: "Tres"},
        {pregunta: "¿Cómo denominaba la banda la fiesta de sus conciertos en vivo?", opciones: ["El ritual", "La ceremonia", "El pogo eterno", "El festín"], respuesta: "El ritual"},
        {pregunta: "¿En qué estadio tocaron Los Piojos en julio de 1997 ante más de 10.000 personas?", opciones: ["Microestadio de Ferro", "Estadio de Huracán", "Microestadio de Racing Club", "Estadio de River Plate"], respuesta: "Microestadio de Racing Club"},
        {pregunta: "¿En qué mes de 1997 tocaron en el Parque Sarmiento ante más de 7.000 personas?", opciones: ["Enero", "Julio", "Noviembre", "Diciembre"], respuesta: "Noviembre"},
        {pregunta: "¿En qué año se lanzó el álbum 'Azul'?", opciones: ["1996", "1997", "1998", "1999"], respuesta: "1998"},
        {pregunta: "¿En qué lugar presentaron el álbum 'Azul'?", opciones: ["Estadio de River", "Estadio de All Boys", "Luna Park", "Teatro Ópera"], respuesta: "Estadio de All Boys"},
        {pregunta: "¿Cómo se llama el primer disco en vivo de Los Piojos?", opciones: ["Ritual", "Verde Paisaje del Infierno", "Máquina de Sangre", "Azul"], respuesta: "Ritual"},
        {pregunta: "¿En qué año se grabó el álbum en vivo 'Ritual'?", opciones: ["1997", "1998", "1999", "2000"], respuesta: "1999"},
        {pregunta: "¿En qué estadio se grabó 'Ritual'?", opciones: ["Luna Park", "Estadio de Obras", "Parque Sarmiento", "Microestadio de Racing"], respuesta: "Estadio de Obras"},
        {pregunta: "¿En qué ciudad hicieron un recital gratuito ante 100.000 personas en 1999?", opciones: ["Buenos Aires", "Rosario", "La Plata", "Córdoba"], respuesta: "La Plata"},
        {pregunta: "¿Quién dejó la banda en el año 2000 tras una pelea con Gustavo Kupinski?", opciones: ["Andrés Ciro Martínez", "Daniel Buira", "Daniel Fernández", "Sebastián Cardero"], respuesta: "Daniel Buira"},
        {pregunta: "¿Quién reemplazó a Daniel Buira en la batería?", opciones: ["Tavo Kupinski", "Daniel Fernández", "Sebastián 'Roger' Cardero", "Miguel Rodríguez"], respuesta: "Sebastián 'Roger' Cardero"},
        {pregunta: "¿Cómo se llamó la serie de shows que realizaron en Obras en julio del 2000?", opciones: ["El Piojoso Tour", "Septrilogía", "Rituales de Fuego", "Máquina de Sangre en vivo"], respuesta: "Septrilogía"},
        {pregunta: "¿Qué bandas participaron como invitados en la 'Septrilogía'?", opciones: ["Bersuit y Babasónicos", "La Renga, Divididos y Viejas Locas", "Attaque 77 y Los Auténticos Decadentes", "Los Ratones Paranoicos y Patricio Rey"], respuesta: "La Renga, Divididos y Viejas Locas"},
        {pregunta: "¿En qué año se lanzó el álbum 'Verde Paisaje del Infierno'?", opciones: ["1999", "2000", "2001", "2002"], respuesta: "2000"},
        {pregunta: "¿En qué estadio se presentó 'Verde Paisaje del Infierno' en diciembre del 2000?", opciones: ["Luna Park", "Estadio de Atlanta", "Teatro Gran Rex", "Estadio de Huracán"], respuesta: "Estadio de Atlanta"},
        {pregunta: "¿Por qué motivo tuvieron que cambiar de estadio en 2001?", opciones: ["Falta de entradas", "Problemas con la productora", "Denuncias de vecinos por ruidos molestos", "Razones climáticas"], respuesta: "Denuncias de vecinos por ruidos molestos"},
        {pregunta: "¿A qué estadio se mudaron después de los reclamos por ruidos molestos en 2001?", opciones: ["Estadio de Vélez", "Estadio de Boca Juniors", "Estadio de Huracán", "Parque Sarmiento"], respuesta: "Estadio de Huracán"},
        {pregunta: "¿En qué año se lanzó el álbum 'Azul'?", opciones: ["1996", "1997", "1998", "1999"], respuesta: "1998"},
        {pregunta: "¿Dónde se presentó en vivo el álbum 'Azul'?", opciones: ["Estadio de River", "Parque Sarmiento y Estadio de All Boys", "Estadio de Racing", "Microestadio de Ferro"], respuesta: "Parque Sarmiento y Estadio de All Boys"},
        {pregunta: "¿Cuál fue el primer disco en vivo de Los Piojos?", opciones: ["Ritual", "Huracanes en luna plateada", "Máquina de sangre", "Desde lejos no se ve"], respuesta: "Ritual"},
        {pregunta: "¿En qué estadio se grabó el disco en vivo 'Ritual'?", opciones: ["Estadio de Huracán", "Estadio de River Plate", "Estadio de Obras", "Luna Park"], respuesta: "Estadio de Obras"},
        {pregunta: "¿Qué integrante dejó la banda en el año 2000?", opciones: ["Daniel Buira", "Gustavo Kupinski", "Sebastián 'Roger' Cardero", "Miguel Ángel Rodríguez"], respuesta: "Daniel Buira"},
        {pregunta: "¿Quién reemplazó a Daniel Buira en la batería?", opciones: ["Luli Bass", "Miguel Ángel Rodríguez", "Sebastián 'Roger' Cardero", "Piti Fernández"], respuesta: "Sebastián 'Roger' Cardero"},
        {pregunta: "¿En qué año se lanzó 'Verde paisaje del infierno'?", opciones: ["1998", "1999", "2000", "2001"], respuesta: "2000"},  
        {pregunta: "¿Qué banda invitada tocó con Los Piojos en Vélez en 2004?", opciones: ["Attaque 77", "Divididos", "Pappo y Ricardo Mollo", "La Renga"], respuesta: "Pappo y Ricardo Mollo"},
        {pregunta: "¿Qué premio recibieron Los Piojos en 2005?", opciones: ["Premio Grammy", "Premio Konex", "Premio Gardel", "Premio MTV"], respuesta: "Premio Konex"},
        {pregunta: "¿A qué banda internacional telonearon en 2006?", opciones: ["Guns N' Roses", "Rolling Stones", "Aerosmith", "The Ramones"], respuesta: "Rolling Stones"},
        {pregunta: "¿Cómo se llama el primer DVD de Los Piojos?", opciones: ["Desde lejos no se ve", "Fantasmas peleándole al viento", "Ritual", "Máquina de sangre"], respuesta: "Fantasmas peleándole al viento"},
        {pregunta: "¿En qué festival cerraron su presentación el 10 de febrero de 2008?", opciones: ["Quilmes Rock", "Cosquín Rock", "Pepsi Music", "Rock en Baradero"], respuesta: "Cosquín Rock"},
        {pregunta: "¿Cuántas nominaciones recibieron en los Premios Gardel 2008?", opciones: ["4", "5", "6", "7"], respuesta: "6"},
        {pregunta: "¿Cuál de estas categorías NO fue una nominación de Los Piojos en los Premios Gardel 2008?", opciones: ["Mejor DVD", "Álbum del Año", "Mejor Álbum de Folklore", "Canción del Año"], respuesta: "Mejor Álbum de Folklore"},
        {pregunta: "¿Qué canción de Los Piojos fue nominada a Canción del Año en los Premios Gardel 2008?", opciones: ["Pacífico", "Bicho de ciudad", "Fijáte", "El Farolito"], respuesta: "Pacífico"},
        {pregunta: "¿En qué festival tocaron en River el 5 de abril de 2008?", opciones: ["Cosquín Rock", "Pepsi Music", "Quilmes Rock", "Personal Fest"], respuesta: "Quilmes Rock"},
        {pregunta: "¿Quién fue el exbaterista de Los Piojos que se sumó como invitado en River en 2008?", opciones: ["Sebastián 'Roger' Cardero", "Daniel Buira", "Piti Fernández", "Miguel Ángel Rodríguez"], respuesta: "Daniel Buira"},
        {pregunta: "¿Con qué grupo de murga se presentó Daniel Buira en River en 2008?", opciones: ["Los Auténticos Decadentes", "La Chilinga", "Los Pericos", "Bersuit Vergarabat"], respuesta: "La Chilinga"},
        {pregunta: "¿Cuántas fechas agotaron Los Piojos en el Luna Park en abril de 2008?", opciones: ["2", "3", "4", "5"], respuesta: "3"},
        {pregunta: "¿En qué continente tocaron Los Piojos luego de sus shows en el Luna Park en abril de 2008?", opciones: ["Asia", "Europa", "Oceanía", "África"], respuesta: "Europa"},
        {pregunta: "¿En qué país presentaron su disco y editaron un CD/DVD exclusivo en 2008?", opciones: ["Alemania", "Francia", "España", "Italia"], respuesta: "España"},
        {pregunta: "¿En qué festival tocaron Los Piojos en España en 2008?", opciones: ["Primavera Sound", "Mad Cool", "Viña Rock", "Sonorama"], respuesta: "Viña Rock"},
        {pregunta: "¿En qué ciudad de España tocaron Los Piojos el 2 de mayo de 2008?", opciones: ["Madrid", "Barcelona", "Mallorca", "Valencia"], respuesta: "Mallorca"},
        {pregunta: "¿En qué estadio tocaron en Rosario en mayo de 2008?", opciones: ["Gigante de Arroyito", "Estadio cubierto de Newell's Old Boys", "Parque Independencia", "Metropolitano"], respuesta: "Estadio cubierto de Newell's Old Boys"},
        {pregunta: "¿Cuántas fechas anunciaron en el Luna Park para junio de 2008?", opciones: ["2", "3", "4", "5"], respuesta: "4"},
        {pregunta: "¿Qué guitarrista dejó la banda en septiembre de 2008?", opciones: ["Piti Fernández", "Juanchi Bisio", "Gustavo Kupinski", "Daniel Buira"], respuesta: "Piti Fernández"},
        {pregunta: "¿Qué proyecto musical formó Piti Fernández tras dejar Los Piojos?", opciones: ["La Chilinga", "La Franela", "Las Pelotas", "Mancha de Rolando"], respuesta: "La Franela"},
        {pregunta: "¿Por qué Piti Fernández tuvo conflictos dentro de la banda?", opciones: ["Quería poner su voz en algunas canciones", "Quería cambiar de estilo musical", "No le gustaban las giras", "Tuvo problemas de salud"], respuesta: "Quería poner su voz en algunas canciones"},
        {pregunta: "¿Quién reemplazó a Piti Fernández en la guitarra?", opciones: ["Juanchi Bisio", "Miguel Ángel Rodríguez", "Gustavo Kupinski", "Luli Baa"], respuesta: "Juanchi Bisio"},
        {pregunta: "¿En qué ciudad debutó Juanchi Bisio como guitarrista de Los Piojos?", opciones: ["Córdoba", "Rosario", "Buenos Aires", "Mendoza"], respuesta: "Rosario"},
        {pregunta: "¿Cuáles fueron los tres países que visitaron en su gira europea de 2008?", opciones: ["España, Francia, Italia", "Alemania, España, Italia", "Inglaterra, España, Portugal", "Francia, Alemania, Holanda"], respuesta: "Alemania, España, Italia"},
        {pregunta: "¿En qué festival tocaron en Rosario en noviembre de 2008?", opciones: ["Pepsi Music", "Quilmes Rock", "Cosquín Rock", "Baradero Rock"], respuesta: "Quilmes Rock"},
        {pregunta: "¿Cuántas presentaciones en el Luna Park hicieron en diciembre de 2008?", opciones: ["2", "3", "4", "5"], respuesta: "4"},
        {pregunta: "¿Cuántas veces tocaron Los Piojos en el Luna Park en total en 2008?", opciones: ["9", "10", "11", "12"], respuesta: "11"},
        {pregunta: "¿Qué récord lograron Los Piojos en el Luna Park en 2008?", opciones: ["Banda con más shows en un solo año", "Mayor cantidad de público en un show", "Primera banda en tocar allí", "Mayor cantidad de discos vendidos"], respuesta: "Banda con más shows en un solo año"}
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
