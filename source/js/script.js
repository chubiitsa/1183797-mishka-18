const navMain = document.querySelector('.menu');
const navToggle = document.querySelector('.menu__toggle');

navMain.classList.remove('menu--nojs');
navToggle.addEventListener('click', function () {
  navMain.classList.toggle('menu--opened');
});
