//import './data.js';
import { setTimer } from './timer.js'
import { setBeginFirstLevel, setEndFirstLevel } from "./first-level.js";
import { putCurrentInStorage, getCurrentFromStorage } from './util.js';

//check authorization

//display info about current user
const current_user = getCurrentFromStorage();
document.querySelector('.name').textContent = current_user['name'];
document.querySelector('.score-num').textContent = current_user['score'];
const difficulty = current_user['difficulty'];
document.querySelector('.difficulty-lvl').textContent = difficulty === 'easy' ? 'легко' : 'сложно';
if (difficulty === 'easy') document.querySelector('.task-text').textContent = 'Первая и последняя буква обе гласные или согласные';
else document.querySelector('.task-text').textContent = 'В слове не больше 2-х слогов';

//game
const onOffButton = document.querySelector('.onOffButton');

const offButton = function () {
  setEndFirstLevel();
  onOffButton.removeEventListener('click', offButton);
  onOffButton.addEventListener('click', onButton);
};

const onButton = function () {
  onOffButton.removeEventListener('click', onButton);
  onOffButton.addEventListener('click', offButton);
  setBeginFirstLevel(difficulty);
  setTimer();
}

onOffButton.addEventListener('click', onButton);

const toNextLvl = document.querySelector('.to-next-lvl');

const setToNextLvl = function () {
  current_user['score'] = Number(document.querySelector('.score-num').textContent);
  current_user['level'] = current_user['level'] + 1;
  putCurrentInStorage(current_user);
};

toNextLvl.addEventListener('click', setToNextLvl);