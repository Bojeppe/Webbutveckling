let rank = ""; //deklarerar en variabel som heter rank och sätter den till en tom sträng

rank="Commander"; //Sätter den rank vi vill!

switch(rank) {
    case "Sergeant": //om rank är Sergeant så kommer detta sägas
        console.log("You are not WORTHY.");
        break;  //stoppar switchen från att fortsätta till nästa case

    case "Commander": //om rank är Commander så kommer detta sägas
        console.log("You are WORTHY.");
        break;

    case "Captain": //om rank är Captain så kommer detta att sägas
        console.log("Hello Captain! What can i do for you!?");
        break;

    default:  //om vi inte har någon av de tre rankerna ovan så kommer default att köras
        console.log("I dont know what your rank is...");
        break;
}

