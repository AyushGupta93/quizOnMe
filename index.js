// use question list
// and function to put together a quiz
var readlineSync = require('readline-sync');
var score=0;

//input >>> processng >>> output
function welcome(){
  var userName=readlineSync.question("What's your name? ");
  console.log('Welcome',userName, 'to do you know Ayush Gupta? '); 
  console.log("Let's play now!\n")
  }

//play function
function play(question,answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){ //Branching
    score=score+1;
    console.log("right answer");
  }
  else{
   console.log("wrong answer");
  }
  console.log("current score: ",score);
  console.log("--------------------");
}

 //Array of objects
 var questionList=[
   {question: "Where do I live? ",
    answer: "Raebareli",
   },
   {question: "My favorite superhero would be? ",
    answer: "Spiderman",
   },
   {question: "Which is my movie? ",
    answer: "Fight Club",
   },
   {question: "Which is my food? ",
    answer: "Dosa",
   },
   {question: "My dream IT Company would be? ",
    answer: "Amazon"}];

var highScores=[{
  name:"Ayush",
  score:5,
},{
  name:"Akhand",
  score:3,
},{
  name:"Sachin",
  score:2,
}];

//loops
function game(){
for(var i=0;i<questionList.length;i++)
{
var currentQuestion=questionList[i];
play(currentQuestion.question,currentQuestion.answer);
}
console.log("YAY! Final Score: ",score,'\n');
}

function showScores(){
console.log("Checkout the highscores, if you should be there ping me and I'll update it:");  
for(var i=0;i<highScores.length;i++)
{
var currentHighScore=highScores[i];
console.log(currentHighScore.name + " :", currentHighScore.score);
}
console.log("Thanks for playing...");
}

welcome();
game();
showScores();
