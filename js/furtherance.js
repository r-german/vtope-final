// Бургер-меню
const menuIcon = document.querySelector('.menu__icon-wrapper');
const menuNav = document.querySelector('nav');
const rectangle = document.querySelector('.menu__rectangle');
menuIcon.addEventListener('click', function() {
    document.body.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
	menuNav.classList.toggle('_active');
    rectangle.classList.toggle('_active');
});