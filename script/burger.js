const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const headerMobile = document.querySelector('.header__mobile');

burger.addEventListener('click', mobileMenu);

function mobileMenu() {
    burger.classList.toggle('change');
    menu.classList.toggle('change');
    headerMobile.classList.toggle('shadow');
    document.body.classList.toggle("hidden");
}

const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    burger.classList.remove('change');
    menu.classList.remove('change');
    headerMobile.classList.remove('shadow');
    document.body.classList.remove("hidden");
}
