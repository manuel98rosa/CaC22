document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

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