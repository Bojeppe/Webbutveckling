//UPPGift 1
/*function evenOrNot (tal){                       // Skapar en funktion som heter evenOrNot och letar TAL
    if(tal % 2 ===0){ return "Jämnt";            // delar tal på 2 och kollar om resten blir 0 då blir den jämt

    }         
        else{return"Udda";              // annars retunerar vi UDDA

        }
}                  
console.log(evenOrNot(20));     //Jämnt tal - i console

console.log(evenOrNot(7));      //Udda tal i console

*/

//Uppgift 2
/*const nameArray = ["Nisse", "Bertil", "Leo", "Oscar", "Anna"];    //array med 5 namn som heter namnArray

for(let i=0; i < nameArray.length; i++)                           //for loop som loopar längden på strängen alltså antalet namn = antal gånger, 
{
    console.log(nameArray[i]);                                    // skriv ut i consolen arrayen , [i] = skriv ut i ordningen
}
*/

//Uppgift 3
/*
let sum =0;
const siffror = [1, 2, 3, 4,5];          //  = 10

function arrayVarde(value){
    sum += value;
}

siffror.forEach(arrayVarde);
console.log("Summan är: " + sum);
*/

//Uppgift 4

//skapar ett objekt med X Y Z grejerna
const person = {
    namn:"Nisse", 
    age:"23",
    city:"Hedesunda"
};

//funktion som skriver ut grejerna om personen.

function introPerson(p){        // funktionen som skriver ut infon i objekt 
console.log("Hej, jag heter: "+ p.namn, "är: " + p.age, "år gammal och bor i: " + p.city);
};

introPerson(person);            //anropar funktionen