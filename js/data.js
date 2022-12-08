const USERS = {
  first: 10,
  second: 30,
  third: 50
};
let jsonUsers = JSON.stringify(USERS);

localStorage.setItem('users', jsonUsers);