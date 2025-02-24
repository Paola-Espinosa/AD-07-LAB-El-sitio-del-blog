const navContent = document.getElementById('nav')?.outerHTML;

// Insertarlos en otras páginas si existen los placeholders
if (navContent && document.getElementById('nav-placeholder')) {
    document.getElementById('nav-placeholder').innerHTML = navContent;
}