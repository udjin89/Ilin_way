const closeButton = document.querySelector('.button-close');
const submitButton = document.querySelectorAll('.button--submit');
const modal = document.querySelector('.modal');
const messageSuccess = document.querySelector('.modal__submit-success');

const buttonBuy = document.querySelectorAll('.button--buy');

console.log(buttonBuy);
buttonBuy.forEach((elem) => {
  elem.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('hidden');

    window.addEventListener('keydown', onEscKeydown);
  });
});


closeButton.addEventListener('click', (evt) => {
  modal.classList.add('hidden');
});


document.addEventListener('submit', function (evt) {
  evt.preventDefault();
  showMessage();
});


function onEscKeydown(evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    removeMessage();
  }
}

function onOverlayClick() {
  removeMessage();
}

function removeMessage() {
  messageSuccess.classList.add('hidden');
  modal.classList.add('hidden');
  window.removeEventListener('keydown', onEscKeydown);
  window.removeEventListener('click', onOverlayClick);
}

function showMessage() {
  modal.classList.remove('hidden');
  messageSuccess.classList.remove('hidden');
  window.addEventListener('keydown', onEscKeydown);
  window.addEventListener('click', onOverlayClick);
}
