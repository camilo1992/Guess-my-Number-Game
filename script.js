'use strict';

const overlay = document.querySelector(`.overlay`);
const modal = document.querySelector(`.modal`);
const msgModal = document.querySelector(`.message2`);
const againBtn = document.querySelector(`.again`);
const checkBtn = document.querySelector(`.check`);
const checkBox = document.querySelector(`.guess`);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const openModal = function (message) {
  modal.classList.remove(`hidden`);
  msgModal.textContent = message;
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
  init();
};

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

checkBtn.addEventListener(`click`, function () {
  let guess = +checkBox.value;
  checkBox.value = ``;
  checkBox.focus();

  if (!guess) {
    displayMessage(`No number!`);
  } else if (guess === secretNumber) {
    openModal(`Well done !! The number is ${secretNumber}`);
    displayMessage(`Correct number`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem `;

    // document.querySelector(`.check`).hidden = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = score;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? `Too high` : `Too low`);
    score--;
    document.querySelector(`.score`).textContent = score;
  } else {
    displayMessage(`You lost the game`);
    document.querySelector(`.score`).textContent = 0;
  }
});

const init = function () {
  document.querySelector(`.guess`).focus();
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`.guess`).value = ``;
  displayMessage(`Start guessing ... `);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
};

againBtn.addEventListener(`click`, function () {
  init();
  closeModal();
});

overlay.addEventListener('click', closeModal);
