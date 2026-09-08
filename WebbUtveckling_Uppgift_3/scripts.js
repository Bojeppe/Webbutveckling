//FUNGERANDE basic byte ICKE tillbaka
//function swapText(){ document.getElementById("h1-text").innerHTML = "GOODBYE World"; }

//Fungerande byte men du kan klicka igen för att få tillbaka Hello World!
function swapText(){                                    //Funktion som heter swapText
    let h1Text = document.getElementById("h1-text");    //h1Text = det som står i h1

    if(h1Text.textContent === "Hello World!")           //OM det som står i h1Text strängen är Hello World
    {
        h1Text.textContent ="Goodbye World!";           //Byt texten till Goodvbye World!
    }

    else                                                //Annars skriv Hello World! Igen :) Gör så man inte behöver refresha sidan igen utan bara klicka på knappen igen för att ändra texten
    {
    h1Text.textContent="Hello World!";
    }
}

