document.addEventListener('DOMContentLoaded', function () {

    // Tab
    const tabs = document.querySelectorAll('.group');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('[id^="img"]').forEach(img => img.classList.add('hidden'));
            document.getElementById(`img${index + 1}`).classList.remove('hidden');
        });
    });

    // Menu
    var navbar = document.querySelector(".header-nav");

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.setAttribute("id", "fixed-top");
        } else {
            navbar.removeAttribute("id");
        }
    });

    // Open/Close Menu
    var menuToggle = document.getElementById('menuToggle');
    var mobileMenu = document.getElementById('mobileMenu');
    var closeMenuBtn = document.getElementById('closeMenu');

    if (menuToggle && mobileMenu && closeMenuBtn) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
        closeMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
        });
    }

    // form
    var toggleButtons = document.querySelectorAll('.toggle-form');
    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var targetForm = event.target.getAttribute('data-form');
            var forms = document.querySelectorAll('.form-content');

            forms.forEach(function (form) {
                form.classList.remove('active');
            });
            document.querySelector('.form-content.' + targetForm).classList.add('active');
        });
    });
});