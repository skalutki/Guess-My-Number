'use strict';

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

const btnAgain = document.querySelector('.again');
const btnCheck = document.querySelector('.check');
const highscore = document.querySelector('.highscore');
const score = document.querySelector('.score');
const body = document.querySelector('body');

let secretNumber = Math.floor(Math.random() * 20) + 1;

console.log(secretNumber);

let i = 20;
let j = 20;

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').style.fontSize = '8rem';
    highscore.textContent = i;
    score.textContent = j;
    body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //when guess is too low
  } else if (guess < secretNumber) {
    if (j > 1) {
      document.querySelector('.message').textContent = '📉 too low!';
      j--;
      score.textContent = j;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER! ';
      score.textContent = 0;
    }

    //When guess is to high
  } else if (guess > secretNumber) {
    if (j > 1) {
      document.querySelector('.message').textContent = '📈 too high!';
      j--;
      score.textContent = j;
    } else {
      document.querySelector('.message').textContent = '💥 GAME OVER!';
      score.textContent = 0;
    }
  }
  i--;
});

btnAgain.addEventListener('click', function () {
  let i = 20;
  let j = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score.textContent = j;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
