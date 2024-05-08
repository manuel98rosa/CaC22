// script.js

document.getElementById('navbar-toggle').addEventListener('click', function() {
    var navbarLinks = document.getElementById('navbar-links');
    navbarLinks.classList.toggle('show'); // Muestra u oculta el menú
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Todos los campos son obligatorios.');
        event.preventDefault();
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, introduce un email válido.');
            event.preventDefault();
        }
    }
});