document.addEventListener("DOMContentLoaded", function() {

    const btn = document.querySelector('.main-nav-toggle');
    const menu = document.querySelector('.main-nav-list');

    btn.addEventListener('click', function(e) {
        menu.classList.toggle('show');
    });

});