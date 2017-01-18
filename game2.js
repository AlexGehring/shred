var user = prompt ("So you think you can out - shred \
the shred master? What guitar do you choose: Jaguar, Jazzmaster or SG?!").toUpperCase();

switch(user){
    case 'JAGUAR':
      var jag = prompt("Will you use the whammy?\
        (YES OR NO)").toUpperCase();
        var color = prompt("Is it cherry red?!\
        (YES OR NO)").toUpperCase();
        if( jag === "YES" && color === "YES"){
            confirm("Whammy AND cherry red!? That's\
            the shred masters kryptonite! You win!");
        }else{
            confirm("Sorry but you're no match for\
            the shred master!");
        };
        break;
    case 'JAZZMASTER':
        var amp = prompt("Are you playing through\
        a Marshall? (YES OR NO)").toUpperCase();
        var string = prompt ("Did you put on fresh\
         strings?(YES OR NO)").toUpperCase();
         if(amp === "YES" || string === "YES"){
             confirm("YOU ROCK! You out shredded\
              the master!");
         }else{
             confirm("Silly mortal, you thought you\
              could beat the master!");
         };
        break;
    case 'SG':
        var flatWound = prompt("Are those flat wound\
        strings on that guitar?\
        (YES OR NO)").toUpperCase();
        var pedal = prompt("Did you bring your\
        overdrive pedal? (YES OR NO)").toUpperCase();
        if (flatWound === "YES" && pedal === "YES" ){
            confirm("That's the magic combo!\
            you shred like a star!");
        }else {
            confirm("What a shame, better luck\
            next time buahaha!");
        };
        break;
    default:
        confirm("That guitar is unavailable\
        choose again!");
};
