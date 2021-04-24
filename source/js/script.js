
// ++++  Открытие меню ++++
const head = document.querySelector(".page-header");
const toggleButton = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const toggle = document.querySelector(".checkbox1");

toggleButton.addEventListener("change", function (evt) {
  if (toggle.checked) {
    toggleButton.classList.add("toggle--open");
    menu.classList.add("menu--open");
  }
  else {
    toggleButton.classList.remove("toggle--open");
    menu.classList.remove("menu--open");
  }
});

/*
if (toggleButton) {
  toggleButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (!toggleButton.classList.contains("toogle--close")) {
      toggleButton.classList.remove("toggle--open");
      // toggleButton.classList.add("toogle--close");
      // head.classList.remove("page-header--open-menu");
      menu.classList.remove("menu--open");
      // menu.classList.add("menu--close");

      // if (logoLight && logoDark && !head.classList.contains("page-header--scroll")) {
      // logoLight.classList.add("hidden");
      // logoDark.classList.remove("hidden");
      // }
    }
    else { // Открываем меню
      // toggleButton.classList.remove("toogle--close");
      toggleButton.classList.add("toggle--open");
      // head.classList.add("page-header--open-menu");
      // menu.classList.remove("menu--close");
      menu.classList.add("menu--open");

      // if (logoLight && logoDark) {
      // logoDark.classList.add("hidden");
      // logoLight.classList.remove("hidden");
      // }
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
*/
