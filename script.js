'use strict';

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const highscore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

let scoreCounter = 20;
let highscoreCounter = 0;

//refactory function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').style.fontSize = '8rem';
    body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (scoreCounter > highscoreCounter) {
      highscoreCounter = scoreCounter;
      highscore.textContent = highscoreCounter;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (scoreCounter > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 too high!' : '📉 too low!';
      displayMessage(guess > secretNumber ? '📈 too high!' : '📉 too low!');
      scoreCounter--;
      score.textContent = scoreCounter;
    } else {
      // document.querySelector('.message').textContent = '💥 GAME OVER! ';
      displayMessage('💥 GAME OVER! ');
      score.textContent = 0;
    }

    //first version of code before refactored
    //     //when guess is too low
    //   } else if (guess < secretNumber) {
    //     if (scoreCounter > 1) {
    //       document.querySelector('.message').textContent = '📉 too low!';
    //       scoreCounter--;
    //     } else {
    //       document.querySelector('.message').textContent = '💥 GAME OVER! ';
    //       score.textContent = 0;
    //     }

    //     //When guess is to high
    //   } else if (guess > secretNumber) {
    //     if (scoreCounter > 1) {
    //       document.querySelector('.message').textContent = '📈 too high!';
    //       scoreCounter--;
    //     } else {
    //       document.querySelector('.message').textContent = '💥 GAME OVER!';
    //       score.textContent = 0;
    //     }
  }
});

btnAgain.addEventListener('click', function () {
  scoreCounter = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  score.textContent = scoreCounter;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
