//import './data.js';
import { setTimer } from './timer.js'
import { setBeginFirstLevel, setEndFirstLevel } from "./first-level.js";

//check authorization

//display info about current user
const current_user = JSON.parse(localStorage.getItem('user'));
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


