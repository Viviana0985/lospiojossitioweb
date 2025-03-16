document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("videoFondo");
    const boton = document.getElementById("activarSonido");

    if (video && boton) {
        boton.addEventListener("click", function() {
            if (video.muted) {
                video.muted = false;
                boton.innerHTML = '<i class="bi bi-volume-mute"></i>';
            } else {
                video.muted = true;
                boton.innerHTML = '<i class="bi bi-volume-up"></i>';
            }
        });
    } else {
        console.error("No se encontró el video o el botón.");
    }
});