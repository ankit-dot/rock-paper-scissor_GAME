let userScore=0;
let computerScore=0;
let user_score=document.querySelector(".user_score");
let computer_score=document.querySelector(".computer_score");
const rock=document.querySelector(".r")
const paper=document.querySelector(".p")
const scissor=document.querySelector(".s")
const winner=document.querySelector(".winner")


function getcomputerChoice(){
  const choices=['r','p','s'];
  return choices[(Math.floor((Math.random())*3))];
  
}


function wins(userChoice,computerChoice){
  winner.innerHTML="WON";
  userScore++;
  user_score.innerHTML=userScore;
  document.getElementById(userChoice).classList.add('green');
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('green');
  },500)
  
}

function losses(userChoice,computerChoice){
    winner.innerHTML="LOST";
  computerScore++;
  computer_score.innerHTML=computerScore;
document.getElementById(userChoice).classList.add('red');
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('red');
  },500)
  
  
  }
 
  

function draw(userChoice,computerChoice){
  winner.innerHTML="DRAW";
  document.getElementById(userChoice).classList.add('grey');
  
  setTimeout(function () {
    document.getElementById(userChoice).classList.remove('grey');
  },500)
  
}



function game(userChoice){
const computerChoice=getcomputerChoice();
switch (userChoice+computerChoice) {
  case "rs":
  case "sp":
  case "pr":
   wins(userChoice,computerChoice);
   break;
   case "sr":
  case "ps":
  case "rp":
   losses(userChoice,computerChoice);
break;
case "rr":
  case "ss":
  case "pp":
   draw(userChoice,computerChoice);
break;
}


    
}
   



function  main() {
rock.addEventListener('click', function (){
  game("r");
  
})
paper.addEventListener('click', function() {
      game("p");

    })
scissor.addEventListener('click', function() {
          game("s");
    
        }
    
    
)



  
}
main();
