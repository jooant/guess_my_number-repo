'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value = 20;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random()*20+1);


let score = 20;
let highscore = document.querySelector('.highscore').textContent;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //When the player didn't choose any number
   

    //When player wins the game
    if(guess === secretNumber){
        if(score > 0){
            //document.querySelector('.message').textContent = '🎉 Correct number!';
            displayMessage('🎉 Correct number!');
            document.querySelector('.number').textContent = secretNumber; 
            document.querySelector('body').style.backgroundColor= '#60b347';

            document.querySelector('.number').style.width = '30rem'  
            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        
        
    }
    //When the player chose wrong number or didn't choose any number
    else if(!guess || guess !== secretNumber){
       //if(!guess) => No number
        //else 
            //guess > secretNumber ? '📉 The number must be lower!' : '📈 The number must be higher!';
        //document.querySelector('.message').textContent = !guess ? '🙅 No number!' : guess > secretNumber ? '📉 The number must be lower!' : '📈 The number must be higher!';
        displayMessage(!guess ? '🙅 No number!' : guess > secretNumber ? '📉 The number must be lower!' : '📈 The number must be higher!');
        if(score > 0){
            score--;
            document.querySelector('.score').textContent = score;
        } 
        else{
            displayMessage('😓 You lost the game!') ;
        }
    }
  
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20+1);
    document.querySelector('.number').textContent =  '?'; 
    displayMessage('Start guessing...');
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor= '#222';
    document.querySelector('.number').style.width = '15rem'  
})