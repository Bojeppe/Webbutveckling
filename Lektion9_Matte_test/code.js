console.log("------------------------------");

//declare variables
let number1 = 0;
let number2 = 0 ;
let numbOfTests =0;
let correctAnswer = 0;

const numbOfTestsInput = document.querySelector("#numbOfTests");
const showQuestionsBtn = document.querySelector("#showQuestionBtn");
const showQuestion = document.querySelector("#showQuestion");
 
// AADD LISTENER TO BUTTON

showQuestionsBtn.addEventListener(
"click",
showTest


);

//Function to showing tests

function showTest(){

numbOfTests = numbOfTestsInput.value;

if(numbOfTests === 0 || numbOfTests ==""){
   showQuestion.innerHTML = "Ange antal FRÅGOR"
    return;
}


number1 = Math.round(Math.random() * 10);
number2 = Math.round(Math.random() * 10);
correctAnswer = number1 + number2;

showQuestion.innerHTML = "Vad är: " +number1 "+" + number2 + "?";
showQuestion.innerHTML = number1;

}
// add functions

function calculateFUNC(){
   number1 =0;
   let number3 = 20;
}
