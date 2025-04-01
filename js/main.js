$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
    });
});

var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
});
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__menu a');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('nav__menu-active');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('nav__menu-active');
        });
    });
});
