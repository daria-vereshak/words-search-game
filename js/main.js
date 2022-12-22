//import './data.js';
import { displayCards } from "./display-level.js";

//check authorization

//display info about current user
const current_user = JSON.parse(localStorage.getItem('user'));
console.log(current_user);
document.querySelector('.name').textContent = current_user['name'];
document.querySelector('.score-num').textContent = current_user['score'];
document.querySelector('.difficulty-lvl').textContent = current_user['difficulty'] === 'easy' ? 'легко' : 'сложно';

//game
displayCards(current_user['difficulty']);
