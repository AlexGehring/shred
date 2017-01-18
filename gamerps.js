var userChoice = prompt("So you think you can out shred the Shred Master? Choose your weapon: Jaguar, Jazzmaster or SG!?").toUpperCase();
 if(userChoice === "JAGUAR"){
     userChoice = "JAGUAR";
 } else if (userChoice === "JAZZMASTER"){
     userChoice = "JAZZMASTER";
 } else if (userChoice === "SG"){
     userChoice = "SG";
 } else {
     var userChoice = prompt("You could never defeat the shred master on one of those! Please pick from our arsenal:\
     Jaguar, Jazzmaster or SG?!");
 }
 console.log("Player: " + userChoice);


var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "JAGUAR";
} else if(computerChoice <= 0.67) {
	computerChoice = "JAZZMASTER";
} else {
	computerChoice = "SG";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2){
    if( choice1 == choice2 ){
        var userChoice = prompt("You've chosen wisely, the same guitar the Shred Master himself has chosen.\
        Set yourself apart by choosing an amp! Ampeg, Marshall or Fender?").toUpperCase();
        if(userChoice === "MARSHALL"){
            confirm("Congratulations! Your marshall stack disintigrated the master! you win!")
        } else {
            confirm("That's cute, but the Shred Master just blew you away. Better luck next time!");
        }
        } else if( choice1==="JAGUAR"){
            if(choice2 === "SG"){
                confirm("JAGUAR WINS!");
            }
            else{
                confirm("JAZZMASTER WINS! BOOHOOOOO!");
            }
        }
        if(choice1==="JAZZMASTER"){
            if(choice2==="JAGUAR"){
                confirm("JAZZMASTER WINS! HELL YEAH MUTHER FUCKERRRR!");
            } else {
                confirm("SG WINS! NICE LINE 6 GEAR IDIOT!");
            }
        }
        if(choice1==="SG"){
            if(choice2==="JAGUAR"){
                confirm("JAGUAR WINS! F YEAH YOU CRAZY BIIIIIITCH!");
            } else {
                confirm("SG WINS WOOOOOOO MOMMY!");
            }
        }
};

compare(userChoice, computerChoice);
