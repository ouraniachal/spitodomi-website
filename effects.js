
    document.addEventListener('DOMContentLoaded', function () {
        const toggler = document.querySelector('.custom-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        function toggleMenu() {
            let isOpen = navbarCollapse.classList.contains('show');
            toggler.classList.toggle('active', !isOpen);
            navbarCollapse.classList.toggle('show', !isOpen);
        }    

        toggler.addEventListener('click', function (event) {
            toggleMenu();
        });

        // Close menu when clicking outside of it
        document.addEventListener('click', function (event) {
            if (navbarCollapse.classList.contains('show') && !navbarCollapse.contains(event.target) && !toggler.contains(event.target)) {
                toggler.classList.remove('active');
                navbarCollapse.classList.remove('show');
            }
        });

        // Close menu when a nav-link is clicked
        document.querySelectorAll('.nav-link').forEach(function (navLink) {
            navLink.addEventListener('click', function () {
                toggler.classList.remove('active');
                navbarCollapse.classList.remove('show');
            });
        });
    });

