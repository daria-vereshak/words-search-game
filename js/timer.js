const timerShow = document.querySelector('.timer');
let timeMinut = 0.2 * 60;
const setTimer = function () {
  const timer = setInterval(function () {
    const seconds = timeMinut % 60;
    const minutes = timeMinut / 60 % 60;
    // Условие если время закончилось то...
    if (timeMinut <= 0 || document.querySelector('.onOffButton').classList.contains('off')) {
      clearInterval(timer);
      timerShow.textContent = '0:00';

      const field = document.querySelector('.field');
      while (field.firstChild) {
        field.firstChild.remove();
      }
      if (timeMinut <= 0) field.textContent = 'Время вышло';
      
    } else {
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        timerShow.textContent = strTimer;
    }
    --timeMinut; // Уменьшаем таймер
  }, 1000)
};

export { setTimer };