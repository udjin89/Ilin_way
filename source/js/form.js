
const addArrow = document.querySelectorAll(".button-next-step");
// +++++++++++++ Проверка размера экрана
let sizeWindow = window.innerWidth;
// console.log("Size Window =" + sizeWindow);
if (sizeWindow >= 768) {
  // console.log("Size Window =" + sizeWindow);
  for (let i = 0; i < addArrow.length; i++) {
    addArrow[i].classList.add("button-arrow");
  }
}
else {
  for (let i = 0; i < addArrow.length; i++) {
    addArrow[i].classList.remove("button-arrow");
  }
}
// +++++++++++ добавление стрелочки при изменинии экрана
window.addEventListener(`resize`, event => {
  if (screen.width > 768) {
    // console.log(screen.width);
    for (let i = 0; i < addArrow.length; i++) {
      addArrow[i].classList.add("button-arrow");
    }
  }
  else {
    for (let i = 0; i < addArrow.length; i++) {
      addArrow[i].classList.remove("button-arrow");
    }
  }
}, false);
//++++++ Выпадающая таблица со странами
const chose = document.querySelectorAll(".add-plan__item--select");
// console.log("chose = " + chose[0]);
if (chose) {

  for (let i = 0; i < chose.length; i++) {

    let buttonCloseChose = chose[i].querySelector(".remove-country");
    let countryName = chose[i].querySelector(".country-name");

    countryName.addEventListener("click", function (evt) {
      evt.preventDefault();
      // console.log("click chose country");
      if (!chose[i].classList.contains("add-plan__item--select-active")) {
        // modalMap.classList.remove("hidden");
        // buttonCloseChose.classList.add("hidden");
        chose[i].classList.add("add-plan__item--select-active");
      }
      else {
        // buttonCloseChose.classList.remove("hidden");
        chose[i].classList.remove("add-plan__item--select-active");
      }
    });
    buttonCloseChose.addEventListener("click", function (evt) {
      evt.preventDefault();
      // console.log("click Close country");
      if (chose[i].classList.contains("add-plan__item--select-active")) {
        chose[i].classList.remove("add-plan__item--select-active");
      }
    });

  }
}
// Ошибка заполнения
const form = document.querySelector("form");
const textArea = form.querySelectorAll(".action-plan");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  for (let i = 0; i < textArea.length; i++) {
    if (!textArea[i].value) {

      // console.log("Error");
      textArea[i].classList.remove("error");
      setTimeout(function () {
        textArea[i].classList.add("error");
      }, 0);
    }
  }

});
