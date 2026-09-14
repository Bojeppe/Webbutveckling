console.log("------------------------------");

//declare variables
let number1 = 0;
let number2 = 0 ;

const firstNumber =document.querySelector("#firstNumber");
const secondNumber =document.querySelector("#secondNumber");
const calcBtn = document.querySelector("#calculateBtn");
const showResult = document.querySelector("#resultat")
 
// AADD LISTENER TO BUTTON

calcBtn.addEventListener(
"click", 
calculateFUNC

);


// add functions
function calculateFUNC(){
    number1 = Number(firstNumber.value);
    number2 = Number(secondNumber.value);

    //console.log("result is: " + number1 * number2);
    showResult.innerHTML = number1 + number2;
}



console.log("------------------------------");
