// script.js
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const btnReserva = document.getElementById('btnReserva');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const navbarLinks = document.getElementById('navbar-links');
const navbarToggle = document.getElementById('navbar-toggle');
const contactForm = document.getElementById('contactForm');
const formName = document.getElementById('name').value;
const formEmail = document.getElementById('email').value;
const formMessage = document.getElementById('message').value;
let previousScrollPosition = window.scrollY;


const expandMenu = () => {
    navbarLinks.classList.toggle('show'); // Muestra u oculta el menú
};

const reservationForm = () => {
    popup.style.display = 'flex';
}

const closeReservationForm = () => {
    popup.style.display = 'none';
}

const activeScroll = () => {
    let currentScrollPosition = window.scrollY;
    if (currentScrollPosition > previousScrollPosition) {
        navbar.style.borderBottom = "1px solid rgba(0, 0, 0, 0.451)"
        navbar.style.backgroundColor = "rgba(24, 23, 23, 0.216)"
    } else if (currentScrollPosition === 0) {
        navbar.style.backgroundColor = "transparent";
        navbar.style.border = "none";
    } 
    previousScrollPosition = currentScrollPosition;
}

const sendForm = (e) => {
    e.preventDefault();
    console.log("Se envió el formulario")
}

navbarToggle.addEventListener('click', expandMenu);
btnReserva.addEventListener('click', reservationForm);
closeBtn.addEventListener('click', closeReservationForm);
window.addEventListener('scroll', activeScroll);
contactForm.addEventListener('submit', sendForm);
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        closeReservationForm();
    }
});