document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
});

window.addEventListener('resize', function () {
    var menu = document.getElementById('menu');
    if (window.innerWidth > 768) {
        menu.classList.remove('show');
    }
});




