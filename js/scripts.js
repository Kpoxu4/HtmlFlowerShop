document.addEventListener('DOMContentLoaded', function() {
    const burgerButton = document.querySelector('.burger');
    const menu = document.querySelector('.burger__menu');

    burgerButton.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});