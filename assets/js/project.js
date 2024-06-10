document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('mobile-hamburger');
    menu.classList.toggle('hidden');
});

window.addEventListener('resize', function () {
    var menu = document.getElementById('mobile-hamburger');
    if (window.innerWidth > 768) {
        menu.classList.add('hidden');
    }
});
