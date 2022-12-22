import { WORDS } from "./data.js";
import { getRandomArrayElements } from "./util.js";

const LEVEL_WORDS_NUMBER = 42;

const templateCard = document.querySelector('#template-card').content;
const field = document.querySelector('.field');

function displayCards(difficulty, level = 1) {
  const lvlWords = getRandomArrayElements(WORDS.slice(), LEVEL_WORDS_NUMBER);

  switch (difficulty) {
    case 'easy':
      switch (level) {
        case 1: 
          lvlWords.forEach(element => {
            const card = templateCard.cloneNode(true);
            card.querySelector('.word').textContent = element.value;
            card.querySelector('.ans').textContent = element.easyFirst;
            field.append(card);
          });
          break;
        case 2: 
          // 2 lvl
          break;
      }      
      break;
    case 'hard':
      switch (level) {
        case 1: 
          lvlWords.forEach(element => {
            const card = templateCard.cloneNode(true);
            card.querySelector('.word').textContent = element.value;
            card.querySelector('.ans').textContent = element.hardFirst;
            field.append(card);
          });
          break;
        case 2: 
          // 2 lvl
          break;
      }
      break;
  }
};

const onOffButton = document.querySelector('.onOffButton');

function inGame () {
  onOffButton.classList.replace('off', 'on');
  document.querySelector('.rating').classList.add('hidden');
  document.querySelector('.timer').classList.remove('hidden');
  document.querySelector('.onOffButton').textContent = 'Остановить';
}

function outGame () {
  onOffButton.classList.replace('on', 'off');
  document.querySelector('.rating').classList.remove('hidden');
  document.querySelector('.timer').classList.add('hidden');
  document.querySelector('.onOffButton').textContent = 'Начать заново';
}

export {displayCards, inGame, outGame};