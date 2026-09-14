

console.log("----- FUNCTIONS in JavaSCRIPT-----");

// multi test på functions

function greet(name){return"Hello" + name + "!";}
    function multiplyNumbers(numb1, numb2){  return numb1 * numb2;       }          //  multiplynumbers är sifra 1, 2
 console.log(multiplyNumbers(50, 2))                          //50 * 2 = 100


// YELL IT FUNCTIONEN i en string 

  function makeMoreExciting(string){return string + "!!!!!!";}
  function yellIt(string){ string = string.toUpperCase(); string= makeMoreExciting(string); console.log(string);}
  let words = "I am very strong";
  let myNumber ="100";
  yellIt(words);
  yellIt(myNumber);

// ARRAYs function - w3 school  - ARRAY - itreationer av ARRAYS - 

let sum = 0;
const numbers = [14, 500, 78, 13, 26, 45];  // numer i arrayen

function myArrayFunction(value){sum += value;}        //basically functionen myARRAYFunction värdet på sum är += value 

numbers.forEach(myArrayFunction);       //för varje nummer i arrayen basically 
console.log("Summan är: " + sum);       //printas ut i konsolen
console.log("----------------------------------")

document.querySelector("#myID").style.backgroundColor = "Red";    // ändrar backgrund i DOM