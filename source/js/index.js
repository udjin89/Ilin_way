const closeButton = document.querySelector('.button-close');
const submitButton = document.querySelectorAll('.button--submit');
const modal = document.querySelector('.modal');
const messageSuccess = document.querySelector('.modal__submit-success');

const buttonBuy = document.querySelectorAll('.button--buy');
const check = document.querySelectorAll('.field');
const buttonSubmit = document.querySelectorAll('.button--submit');
buttonSubmit.forEach((elem) => {
  elem.addEventListener('click', () => {
    check.forEach((elem) => {
      elem.classList.add('field-check');
    });
  });
});

// Клик по кнопке закрытия
closeButton.addEventListener('click', (evt) => {
  removeMessage();
});
// Событие отправки формы и показ сообщения
document.addEventListener('submit', function (evt) {
  evt.preventDefault();

  showMessage();
});

// Событие нажатия ESCAPE
function onEscKeydown(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    removeMessage();
  }
}
// Событие нажатия мыши
function onOverlayClick() {
  removeMessage();
}
// Скрытие модального окна и снятие событий клика и нажатия  ESCAPE
function removeMessage() {
  messageSuccess.classList.add('hidden');
  modal.classList.add('hidden');
  modal.classList.remove('modal-showX');
  window.removeEventListener('keydown', onEscKeydown);
  window.removeEventListener('click', onOverlayClick);

}
// Показ модального окна и назначение событий клика и нажатия ESCAPE
function showMessage() {
  modal.classList.remove('hidden');
  messageSuccess.classList.remove('hidden');
  window.addEventListener('keydown', onEscKeydown);
  window.addEventListener('click', onOverlayClick);
}

if (modal) {
  // Появления модального окна по клику кнопки
  buttonBuy.forEach((elem) => {
    elem.addEventListener('click', (evt) => {
      evt.preventDefault();
      modal.classList.remove('hidden');
      modal.classList.add('modal-showX');
      window.addEventListener('keydown', onEscKeydown);
    });
  });
}

// Ошибка заполнения
const form = document.querySelectorAll("form");
const tel0 = form[0].querySelector(".label-tel-number");
const email0 = form[0].querySelector(".label-email");
const tel1 = form[1].querySelector(".label-tel-number");
const email1 = form[1].querySelector(".label-email");

form.forEach((elem) => {

  elem.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const phone = elem.querySelector('.field--tel-number');
    phone.classList.add('.field-check');
    // if (!phone.value) {

    //   console.log("Error");
    //   const err = phone.querySelector('.error');
    //   err.classList.remove('hidden');
    //   textArea[i].classList.remove("error");
    //   setTimeout(function () {
    //     textArea[i].classList.add("error");
    //   }, 0);
    // }


  });

});
