const body = document.body;
const navbarMobile = document.querySelector('.navbar-mobile');
const burger = document.querySelector('.burger');
const burgerLineMiddle = document.querySelector('.burger__line-middle');

burger.addEventListener('click', function () {
    navbarMobile.classList.toggle('is-menu-show');
    body.classList.toggle('is-overflow-y-hidden');
    body.classList.toggle('is-body-bg-color');
    burgerLineMiddle.classList.toggle('is-w-100');
});
