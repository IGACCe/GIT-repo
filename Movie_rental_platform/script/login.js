// script/login.js

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

function validateLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const errorElem = document.getElementById('login-error');

  if (!email || !password) {
    errorElem.textContent = "Both fields are required.";
  } else if (!validateEmail(email)) {
    errorElem.textContent = "Invalid email format.";
  } else {
    errorElem.textContent = "";
    window.location.href = "home.html";
  }
}

function validateRegister() {
  const name = document.getElementById('register-name').value;
  const surname = document.getElementById('register-surname').value;
  const email = document.getElementById('register-email').value;
  const emailAgain = document.getElementById('register-email-again').value;
  const password = document.getElementById('register-password').value;
  const passwordAgain = document.getElementById('register-password-again').value;
  const errorElem = document.getElementById('register-error');

  if (name.length < 2) {
    errorElem.textContent = "Name must contain at least 2 letters.";
  } else if (surname && surname.length < 2) {
    errorElem.textContent = "Surname must contain at least 2 letters.";
  } else if (!validateEmail(email)) {
    errorElem.textContent = "Invalid email format.";
  } else if (email !== emailAgain) {
    errorElem.textContent = "Emails do not match.";
  } else if (password.length < 8) {
    errorElem.textContent = "Password must be at least 8 characters long.";
  } else if (password !== passwordAgain) {
    errorElem.textContent = "Passwords do not match.";
  } else {
    errorElem.textContent = "";
    window.location.href = "home.html";
  }
}
