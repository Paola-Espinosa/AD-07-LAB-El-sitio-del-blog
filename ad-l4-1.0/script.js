// Función para cargar el header con el nav
function loadNav() {
    // Crear el contenido del nav dinámicamente
    const navContent = `
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #35995F;">
            <a class="navbar-brand" href="#" style="color: #CBFFBF;">PerseFlora</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html" style="color: #CBFFBF;">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./about.html" style="color: #CBFFBF;">About</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="./contact.html" style="color: #CBFFBF;">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;

    // Insertar el contenido del nav en el div con id 'nav-placeholder'
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navContent;
    }
}

// Función para cargar el footer
function loadFooter() {
    // Crear el contenido del footer dinámicamente
    const footerContent = `
        <footer style="background-color: #ED7FFF; color: #000; padding: 20px; text-align: center;">
            <p>Autores del sitio web:</p>
            <ul style="list-style-type: none; padding: 0;">
                <li>Ana Karen Olan</li>
                <li>Liz Arcadia</li>
                <li>Diana Alvarez</li>
                <li>Karla Alonso</li>
                <li>Jessica Perez</li>
                <li>Paola Espinosa</li>
                <li>Ana Conejo</li>
                <li>Erandi Sánchez</li>
            </ul>
            <p>Contacto: <a href="mailto:contacto@perseflora.com" style="color: #35995F;">contacto@perseflora.com</a></p>
            <p>© 2025 Perseflora. Todos los derechos reservados.</p>
        </footer>
    `;

    // Insertar el contenido del footer en el div con id 'footer-placeholder'
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

// Prevenir el envío real del formulario y manejar el evento de envío
document.querySelector("#contact-form")?.addEventListener("submit", function(event) {
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
