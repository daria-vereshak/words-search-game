//import './data.js';
import { setTimer } from './timer.js'
import { setBeginFirstLevel, setEndFirstLevel } from './first-level.js';
import { setBeginSecondLevel, setEndSecondLevel } from './second-level.js';
import { putCurrentInStorage, getCurrentFromStorage } from './util.js';

//check authorization

//display info about current user
const current_user = getCurrentFromStorage();
document.querySelector('.name').textContent = current_user['name'];
document.querySelector('.score-num').textContent = current_user['score'];
const difficulty = current_user['difficulty'];
document.querySelector('.difficulty-lvl').textContent = difficulty === 'easy' ? 'легко' : 'сложно';
let level = current_user['level'];
if (level >= 2) document.querySelector('#second').checked = true;

const displayTask = function (difficulty, level) {
  if (level === 1) {
    if (difficulty === 'easy') document.querySelector('.task-text').textContent = 'Первая и последняя буква обе гласные или согласные';
    else document.querySelector('.task-text').textContent = 'В слове не больше 2-х слогов';
  } 
  else {
    if (difficulty === 'easy') document.querySelector('.task-text').textContent = 'Слова с 3-мя слогами должны быть справа, остальные - слева';
    else document.querySelector('.task-text').textContent = 'Слова мужского рода должны быть слева, остальные - справа';
  }
};
displayTask(difficulty, level);

//game
const onOffButton = document.querySelector('.onOffButton');

const offButton = function () {
  if (level === 1) setEndFirstLevel();
  else setEndSecondLevel();
  onOffButton.removeEventListener('click', offButton);
  onOffButton.addEventListener('click', onButton);
};

const onButton = function () {
  onOffButton.removeEventListener('click', onButton);
  onOffButton.addEventListener('click', offButton);
  if (level === 1) setBeginFirstLevel(difficulty);
  else setBeginSecondLevel(difficulty);
  setTimer();
}

onOffButton.addEventListener('click', onButton);

const toNextLvl = document.querySelector('.to-next-lvl');

const setToNextLvl = function () {
  current_user['score'] = Number(document.querySelector('.score-num').textContent);
  current_user['level'] = current_user['level'] + 1;
  putCurrentInStorage(current_user);
  document.querySelector('#second').checked = true;
  toNextLvl.classList.add('hidden');
  displayTask(difficulty, level);
};

toNextLvl.addEventListener('click', setToNextLvl);