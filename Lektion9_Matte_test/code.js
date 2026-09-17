console.log("------------------------------");

//declare variables
let number1 = 0;
let number2 = 0 ;
let numbOfTests =0;
let correctAnswer = 0;
let yourAnswer;

const numbOfTestsInput = document.querySelector("#numbOfTests");
const showQuestionsBtn = document.querySelector("#showQuestionBtn");

//Mit fell är check answer - kolla screen grabsen på discord
const showQuestion = document.querySelector("#showQuestion");
const showResult = document.querySelector("#checkAnswerBtn");
const yourAnswerInput = document.querySelector("#yourAnswer");

 
// AADD LISTENER TO BUTTON

showQuestionsBtn.addEventListener(
"click",
showTest
);

//add listener again but too CheckANSWER

checkAnswerBtn
addEventListener(
   "click",
   checkAnswer
);

//Function to showing tests

function showTest(){

numbOfTests = numbOfTestsInput.value;

if(numbOfTests==""){
   showQuestion.innerHTML = "Ange antal FRÅGOR"
   return;
}
if(numbOfTests === 0){
   showQuestion.innerHTML = "Ange antal FRÅGOR"
    return;
}


number1 = Math.round(Math.random() * 10);
number2 = Math.round(Math.random() * 10);
correctAnswer = number1 + number2;

showQuestion.innerHTML = "Vad är: " + number1 + " + " + number2 + "?";

numbOfTests--;
}
// add functions

function calculateFUNC(){
   number1 =0;
   let number3 = 20;
}

function checkAnswer(){

//här ska jag kontrollera om correctAnswer 
//är samma som MyAnswer
yourAnswer = yourAnswerInput.value;

if(correctAnswer ===0){
   showResult.innerHTML ="Rätt";
}
else{
   showResult.innerHTML ="Fel";
}


}
