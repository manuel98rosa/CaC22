document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    let previousScrollPosition = window.scrollY;

    const activeScroll = () => {
        let currentScrollPosition = window.scrollY;
        // Compara la posición actual con la anterior
        if (currentScrollPosition > previousScrollPosition) {
            console.log("El usuario está haciendo scroll hacia abajo.");
            navbar.style.backgroundColor = "black"
        } else {
            console.log("El usuario está haciendo scroll hacia arriba.");
        }
        previousScrollPosition = currentScrollPosition;
    }

    window.addEventListener('scroll', activeScroll);

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('collapsed');
    });

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'es', // Configura el calendario en español
        events: [
            // Ejemplo de eventos
            {
                title: 'Cita con Cliente 1',
                start: '2024-05-20T10:00:00',
                end: '2024-05-20T11:00:00'
            },
            {
                title: 'Cita con Cliente 2',
                start: '2024-05-21T12:00:00',
                end: '2024-05-21T13:00:00'
            }
        ]
    });
    calendar.render();
});