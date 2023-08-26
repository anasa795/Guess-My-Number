'use strict';
let a=document.querySelector('.check').textContent
// console.log(a)
let secNmber=Math.trunc(Math.random()*20+1)
// console.log(secNmber,typeof secNmber )
let score=document.querySelector('.score').textContent=20
// console.log(score)
let highscore=0;


document.querySelector('.check').addEventListener(
    'click',function(){
        // console.log(document.querySelector('.guess').value)
        let guessNumber=Number(document.querySelector('.guess').value)
        // console.log(guessNumber,typeof guessNumber)
        if(!guessNumber){
            document.querySelector('.message').textContent='Undefind Number !💤 '
        }else if(guessNumber===secNmber){
            document.querySelector('body').style.backgroundColor='#60b347'
            document.querySelector('.message').textContent='correct answer 💥'
            document.querySelector('.number').textContent=secNmber
            document.querySelector('.number').style.width = '30rem';
            if(score>highscore){
                highscore=score
                document.querySelector('.highscore').textContent=highscore
            }
        }else if(guessNumber>secNmber){
            document.querySelector('.message').textContent='Too high ⬆️'
            if(score>1){
                score--
            document.querySelector('.score').textContent=score
            }else {
                // document.querySelector('.score').textContent=score
                document.querySelector('.label-score').textContent='You lost the game "try again"'
            }
        }else if(guessNumber<secNmber){
            document.querySelector('.message').textContent='Too low ⬇️'
            if(score>1){
                score--
            document.querySelector('.score').textContent=score
            }else {
                // document.querySelector('.score').textContent=score
                document.querySelector('.label-score').textContent='You lost the game "try again"'
            }
        }
        
    })

    document.querySelector('.again').addEventListener(
        'click',function(){
            score=20;
            document.querySelector('.score').textContent = score;
            secNmber=Math.trunc(Math.random()*20+1)
            document.querySelector('.number').textContent="?"
            document.querySelector('.number').style.width = '15rem';
            document.querySelector('.guess').value=''
            document.querySelector('body').style.backgroundColor = 'rgb(55, 128, 121)';
        })