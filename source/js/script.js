// ++++  Открытие меню ++++
const head = document.querySelector('.page-header');
const toggleButton = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const toggle = document.querySelector('.checkbox1');

toggleButton.addEventListener('change', function (evt) {
  if (toggle.checked) {
    toggleButton.classList.add('toggle--open');
    menu.classList.add('menu--open');
  }
  else {
    toggleButton.classList.remove('toggle--open');
    menu.classList.remove('menu--open');
  }
});

// ++++Скрол меню++ +
// Cобытие scroll

window.addEventListener('scroll', function () {

  const scrolled = window.pageYOffset; // смещение окна браузера
  const heightHeader = head.clientHeight;

  if (scrolled > heightHeader) {
    head.classList.add('page-header--scroll');
  }
  if (scrolled < heightHeader) {
    head.classList.remove('page-header--scroll');
  }
});

