//import './data.js';
//собрать данные из формы
//const form = document.querySelector('#authorization');

const signIn = function () {
  //create current user's object and set it in localstorage
  const userName = document.querySelector('#name').value;
  const CURRENT_USER = {
    name: userName,
    score: 0,
    level: 1,
  }
  localStorage.setItem('user', JSON.stringify(CURRENT_USER));
  window.location.href = '../index.html';
};

// const signUp = function () {
//   const repeatPassword = form.querySelector('#repass');
//   if (repeatPassword !== password) {
//     form.querySelector('#hint').textContent = 'Пароли не совпадают';
//   }
//   //проверить, что имя пользователя уникальное
//   //сохранить информацию о пользователе
//   //выдать сообщение об успешной регистрации
//   //перенаправить на вкладку входа
// };

submit.onclick = function (evt) {
  evt.preventDefault();
  signIn();
  // const sign = form.querySelector('#signin');
  // if (sign.checked) {
  //   signIn();
  // } else {
  //   signUp();
  // }
};
