'use strict';

console.log(document.querySelector('.message').textContent);

/*Selecting And Manipulating Elements          (Nov 22, 2025)
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=100;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=10;*/

/*Implementing The Game Logic          (Nov 23, 2025)*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/*Handling Click Events                  (Nov 22,23. 2025)*/
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';

    // When player win
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    /*Manipulating Css Styles           (Nov 23, 2025)*/
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    /*Implementing Highscores          (Nov 24, 2025)*/
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? '🔼 Too high' : '🔽 Too low';
      displayMessage(guess > secretNumber ? '🔼 Too high' : '🔽 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥 You lost';
      displayMessage('💥 You lost');
      document.querySelector('.score').textContent = 0;
    }
    // When guess is too high
  } /*else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔼 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔽 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }*/
});

/*Coding Challenge #1             (Nov 23, 2025)
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = '❗ Start Guessing';
  displayMessage('❗ Start Guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
