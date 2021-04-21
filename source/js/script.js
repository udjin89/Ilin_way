// Вычесление длинны "прогресс бара", смещения stoke dash
// console.log("start script");
const svgEl = document.querySelectorAll(".level__progress-bar"); // ищем все элементы с уровнем
svgEl.forEach((svg) => { // цикл
  const circle = document.querySelector(".circle"); // svg c тегом "circle"
  const dashArray = circle.getTotalLength(); // возвращает длинну circle
  const percentFill = svg.dataset.percent; // берем процент из html разметки, атрибут data-percent="97"
  const percent = (dashArray / 100) * (100 - percentFill); // вычисление смещения
  svg.style.strokeDasharray = dashArray; // задаем длину  stroke svg
  svg.style.strokeDashoffset = percent; // смещение
  // console.log(percent);
});
// ++++  Открытие меню ++++
const head = document.querySelector(".page-header");
const toggleButton = document.querySelector(".toogle");
const menu = document.querySelector(".menu");
const logoLight = menu.querySelector(".logo--light");
const logoDark = menu.querySelector(".logo--dark");

if (toggleButton) {
  // console.log("toggle button find \n");
  // console.log(head);
  toggleButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    // console.log("Click toggleButton");

    if (!toggleButton.classList.contains("toogle--close")) {
      toggleButton.classList.remove("toogle--open");
      toggleButton.classList.add("toogle--close");
      head.classList.remove("page-header--open-menu");
      menu.classList.remove("menu--open");
      menu.classList.add("menu--close");

      if (logoLight && logoDark && !head.classList.contains("page-header--scroll")) {
        logoLight.classList.add("hidden");
        logoDark.classList.remove("hidden");
      }
      // console.log("Close menu");
    }
    else { // Открываем меню
      toggleButton.classList.remove("toogle--close");
      toggleButton.classList.add("toogle--open");
      head.classList.add("page-header--open-menu");
      menu.classList.remove("menu--close");
      menu.classList.add("menu--open");

      if (logoLight && logoDark) {
        logoDark.classList.add("hidden");
        logoLight.classList.remove("hidden");
      }
      // console.log("Open menu");
    }
  });
}
// +++++++++ Модальное окно+++++++++
const modalBusiness = document.querySelector(".modal--business-tariff");
const showButtonTariff = document.querySelector(".button-show-business-tariff");
if (modalBusiness) {
  const closeButtonTariff = modalBusiness.querySelector(".button--close-tariff");

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (!modalBusiness.classList.contains("hidden")) {
        evt.preventDefault();
        modalBusiness.classList.add("hidden");
        modalBusiness.classList.remove("modal-show");
      }
    }
  });

  showButtonTariff.addEventListener("click", function (evt) {
    evt.preventDefault();
    // console.log("Click showButtonTariff");
    modalBusiness.classList.remove("hidden");
    modalBusiness.classList.add("modal-show");
    console.log("Show Tariff");
  });

  closeButtonTariff.addEventListener("click", function (evt) {
    evt.preventDefault();
    // console.log("Click closeButtonTariff");
    modalBusiness.classList.add("hidden");
    modalBusiness.classList.remove("modal-show");
    // console.log("Add class hidden");
  });
}

// ++++ Скрол меню+++
// Cобытие scroll

window.addEventListener('scroll', function () {

  const scrolled = window.pageYOffset; // смещение окна браузера
  const heightHeader = head.clientHeight;

  if (scrolled > heightHeader) {
    head.classList.add("page-header--scroll");
    if (!head.classList.contains("page-header--open-menu")) {
      logoDark.classList.add("hidden");
      logoLight.classList.remove("hidden");
    }

  }
  if (scrolled < heightHeader) {
    head.classList.remove("page-header--scroll");
    if (!head.classList.contains("page-header--open-menu")) {
      logoDark.classList.remove("hidden");
      logoLight.classList.add("hidden");
    }
  }
  // console.log("heightScroll = " + heightHeader);
});


