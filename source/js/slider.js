
const slider = document.querySelector('.slider');

if (slider) {
  const sliderLinks = slider.querySelectorAll('.slider__link');
  const sliderItems = slider.querySelectorAll('.slider__union')

  sliderLinks.forEach((elem, index) => {
    elem.addEventListener('click', (evt) => {
      evt.preventDefault();
      // Выделение кнопки
      sliderLinks.forEach((elem) => {
        elem.classList.remove('slider__link--active');
      });
      elem.classList.add('slider__link--active');
      // Показываем нужный слайд
      sliderItems.forEach((elem) => {
        elem.classList.add('hidden');
      });
      sliderItems[index].classList.remove('hidden');
    });
  });
}
