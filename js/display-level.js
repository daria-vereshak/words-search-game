import { WORDS } from "./data.js";
import { getRandomArrayElements } from "./util.js";

const LEVEL_WORDS_NUMBER = 42;

const templateCard = document.querySelector('#template-card').content;
const field = document.querySelector('.field');

function displayCards() {
  const lvlWords = getRandomArrayElements(WORDS, LEVEL_WORDS_NUMBER);
  lvlWords.forEach(element => {
    const card = templateCard.cloneNode(true);
    card.querySelector('.word').textContent = element.value;
    card.querySelector('.ans').textContent = element.easyFirst;
    field.append(card);
  });
};

export {displayCards};