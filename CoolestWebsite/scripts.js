//SwapText Knappen på Kod sidan
function swapText(){                                    //Funktion som heter swapText
    let tex1 = document.getElementById("swapME");       // tex1 är de som står i den med ID swapME 

    if(tex1.textContent === "Hello World!")           //OM det som står i strängen är Hello World
    {
        tex1.textContent ="Goodbye World!";           //Byt texten till Goodvbye World!
    }

    else                                                //Annars skriv Hello World! Igen :) Gör så man inte behöver refresha sidan igen utan bara klicka på knappen igen för att ändra texten
    {
    tex1.textContent="Hello World!";
    }
}

//Slå Tärningen
function rollDice(){
    const resultat = Math.floor(Math.random() *6) + 1;
    document.getElementById("diceResultat").textContent = "Du slog: " + resultat;
}