// java.js
document.addEventListener('DOMContentLoaded', function() {
    const menuIcono = document.querySelector('.menu-icono');
    const menuDesplegable = document.querySelector('.menu_desplegable1');

    menuIcono.addEventListener('click', function() {
        menuDesplegable.classList.toggle('active');
    });
});
