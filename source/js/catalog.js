const filter = document.querySelector(".filter");
const filterClickZone = filter.querySelector(".button--open-filter");
const buttonCloseFilter = filter.querySelector(".button--close-filter-country");

if (filterClickZone) {

  filterClickZone.addEventListener("click", function (evt) {
    evt.preventDefault();
    // console.log("Click Filter");
    if (!filter.classList.contains("filter--open")) {
      // modalMap.classList.remove("hidden");
      filter.classList.add("filter--open");
    }
    else {
      filter.classList.remove("filter--open");
    }
  });
}
if (buttonCloseFilter) {

  buttonCloseFilter.addEventListener("click", function (evt) {
    evt.preventDefault();
    // console.log("Click Filter");
    if (!filter.classList.contains("filter--open")) {
      // modalMap.classList.remove("hidden");
      filter.classList.add("filter--open");
    }
    else {
      filter.classList.remove("filter--open");
    }
  });
}
//+++++++++
const optionsList = document.querySelector(".option-list");
const optionsListItems = optionsList.querySelectorAll(".option-list__item");

if (optionsListItems) {
  for (let i = 0; i < optionsListItems.length; i++) {

    let clickOption = optionsListItems[i].querySelector(".option-list__title");

    clickOption.addEventListener("click", function (evt) {
      evt.preventDefault();
      // console.log("Click Option = " + i);
      if (!optionsListItems[i].classList.contains("option-list__item--active")) {
        // modalMap.classList.remove("hidden");
        optionsListItems[i].classList.add("option-list__item--active");
      }
      else {
        optionsListItems[i].classList.remove("option-list__item--active");
      }
    });

  }
}
