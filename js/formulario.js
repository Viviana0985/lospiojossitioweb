document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Expresión regular para validar solo letras y espacios
        const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

        // Validar que el nombre no esté vacío y no contenga números
        if (!nombre || !soloLetras.test(nombre)) {
            alert("El campo 'Nombre' debe contener solo letras.");
            return;
        }

        // Validar que el apellido no esté vacío y no contenga números
        if (!apellido || !soloLetras.test(apellido)) {
            alert("El campo 'Apellido' debe contener solo letras.");
            return;
        }

        // Validar que el correo no esté vacío y tenga formato válido
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!correo || !emailPattern.test(correo)) {
            alert("Por favor, introduce un correo electrónico válido.");
            return;
        }

        // Validar que el mensaje no esté vacío
        if (!mensaje) {
            alert("El campo 'Mensaje' no puede estar vacío.");
            return;
        }

        // Si todo es válido
        // Mostrar mensaje de éxito
        alert("✅ Formulario enviado con éxito. Nos pondremos en contacto pronto.");

        // Limpiar el formulario
        form.reset();
    });
});
