console.log("Script loaded");
// grabbing all input fields
const userName = document.getElementById("name");
const userNameLabel = document.querySelector(`.form-container label[for="name"]`)
const email = document.getElementById("email");
const emailLabel = document.querySelector(`.form-container label[for="email"]`);
const number = document.getElementById("contact-number");
const numberLabel = document.querySelector(`.form-container label[for="contact-number"]`);
const genre = document.getElementById("genre");
const genreLabel = document.querySelector(`.form-container label[for="genre"]`);
const submit = document.getElementById("submit");
const errorBlock = document.getElementById("error-block");
let validName = false;
let validEmail = false;
let validNumber = false;
let validGenre = false;


userName.addEventListener("blur", (e) => {
  let regex = /^([a-zA-Z]){3,20}$/
  let value = e.target.value;
  if (regex.test(value)) {
    validName = true;
    userNameLabel.classList.remove("label-error");
    userName.classList.remove("error-show");

  }
  else {
    validName = false;
    userNameLabel.classList.add("label-error");
    userName.classList.add("error-show");

  }
})
email.addEventListener("blur", (e) => {
  let regex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]+){1,10}$/
  let value = e.target.value;
  if (regex.test(value)) {
    validEmail = true;
    emailLabel.classList.remove("label-error");
    email.classList.remove("error-show");

  }
  else {
    validEmail = false;
    emailLabel.classList.add("label-error");
    email.classList.add("error-show");
  }
})
number.addEventListener("blur", (e) => {
  let regex = /^[5-9]([0-9]){9}$/
  let value = e.target.value;
  if (regex.test(value)) {
    validNumber = true;
    numberLabel.classList.remove("label-error");
    number.classList.remove("error-show");
  }
  else {
    validNumber = false;
    numberLabel.classList.add("label-error");
    number.classList.add("error-show");
  }
})
genre.addEventListener("blur", (e) => {
  let regex = /^([a-zA-Z]+)$/
  let value = e.target.value;
  if (regex.test(value)) {
    validGenre = true;
    genreLabel.classList.remove("label-error");
    genre.classList.remove("error-show");
  }
  else {
    validGenre = false;
    genreLabel.classList.add("label-error");
    genre.classList.add("error-show");
  }
})

submit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(`name ${validName} email ${validEmail} number ${validNumber} genre ${validGenre}`)
  if (validName && validEmail && validNumber && validGenre) {
    errorBlock.innerText = "Form submitted successfully";
    errorBlock.classList.add("success");
    errorBlock.classList.add("show");
    errorBlock.classList.remove("error");
  } else {
    errorBlock.innerText = "Form not submitted, Enter valid inputs";
    errorBlock.classList.add("show");
    errorBlock.classList.add("error");
    errorBlock.classList.remove("success");
  }
  setTimeout(() => {
    errorBlock.classList.remove("show");
  }, 3000)
})
// label-error
// error-show