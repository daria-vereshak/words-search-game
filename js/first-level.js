import { displayCards, inGame, outGame } from "./display-level.js";

const field = document.querySelector('.field');

const setOnCard = function (evt) {
  console.log(evt.target.parentNode);
  const currentCard = evt.target.parentNode;
  if (currentCard.classList.contains('card')) {
    const answer = currentCard.querySelector('.ans').textContent;
    answer === '1' ? currentCard.classList.add('right') : currentCard.classList.add('wrong');
  }
};

const setBeginFirstLevel = function (difficulty) {
  inGame();
  displayCards(difficulty);
  field.addEventListener('click', setOnCard); 
};

const setEndFirstLevel = function () {
  field.removeEventListener('click', setOnCard); 
  while (field.firstChild) {
    field.firstChild.remove();
  }
  outGame();
};

export { setBeginFirstLevel, setEndFirstLevel }