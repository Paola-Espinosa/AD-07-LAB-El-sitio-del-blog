/* Archivo: script.js */
document.querySelector("#contact-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita el envío real del formulario

    // Obtener los valores del formulario
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Mostrar mensaje de éxito
    alert(`¡Gracias, ${name}! Tu mensaje ha sido enviado con éxito.\n\nCorreo: ${email}\nMensaje: ${message}`);

    // Opcional: limpiar el formulario después del "envío"
    document.querySelector("#contact-form").reset();
});
