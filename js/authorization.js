//import './data.js';
//собрать данные из формы
//const form = document.querySelector('#authorization');

const signIn = function () {
  //create current user's object and set it in localstorage
  const userName = document.querySelector('#name').value;
  const difficulty = document.querySelector('input[name="difficulty"]:checked');
  const CURRENT_USER = {
    name: userName,
    score: 0,
    level: 1,
    difficulty: difficulty.value,
  }
  localStorage.setItem('user', JSON.stringify(CURRENT_USER));
  window.location.href = '../index.html';
};

submit.onclick = function (evt) {
  evt.preventDefault();
  signIn();
};
