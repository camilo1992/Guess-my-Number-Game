'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);

  if (!guess) {
    displayMessage(`No number!`);
  } else if (guess === secretNumber) {
    displayMessage(`Correct number`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem `;

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

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.score`).textContent = 20;
  document.querySelector(`.guess`).value = ``;
  displayMessage(`Start guessing ... `);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
});
