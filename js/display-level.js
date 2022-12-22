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

export {displayCards};