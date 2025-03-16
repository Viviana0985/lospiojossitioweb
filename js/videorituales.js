document.addEventListener("DOMContentLoaded", function() {
    var videoPreview = document.getElementById('videoPreview');
    var videoFull = document.getElementById('videoFull');
    var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));

    function isMobile() {
        return window.innerWidth <= 768; // Detecta si el ancho de pantalla es de móvil
    }

    videoPreview.addEventListener('click', function(event) {
        if (!isMobile()) { // Solo en PC abre el modal
            event.preventDefault();
            videoModal.show();
            videoFull.play();
        }
    });

    // Al cerrar el modal, pausa y reinicia el video
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
        videoFull.pause();
        videoFull.currentTime = 0;
    });
});