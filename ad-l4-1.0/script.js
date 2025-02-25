// Función para cargar el header con el nav
function loadNav() {
    // Obtener el contenido del header del index.html
    const headerContent = document.getElementById('bar-nav').outerHTML;

    // Insertar el contenido del header en el div con id 'nav-placeholder' en otras páginas
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = headerContent;
    }
}

// Función para cargar el footer
function loadFooter() {
    // Obtener el contenido del footer del index.html
    const footerContent = document.getElementById('main-footer').outerHTML;

    // Insertar el contenido del footer en el div con id 'footer-placeholder' en otras páginas
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerContent;
    }
}

// Ejecutar las funciones cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    loadNav();   // Cargar el nav
    loadFooter(); // Cargar el footer
});


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
