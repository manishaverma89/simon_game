 // step-1 create a new function called nextSequence()

// step-2 Generate a new random number between 0 and 3, and store it in a variable called randomNumber

// step-3 create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow"var

// step-4 Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

// step-5 create a new empty array called gamePattern

// step-6 Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
// step-7 Use jQuery to select the button with the same id as the randomChosenColour
// step-8 use jQuery to animate a flash to the button selected in step 7.
// step-9 figure out how you can use Javascript to play the sound for the button colour selected in step 6
    



var gamePattern = [];                                              //step5
buttonColours = ["red" ,"blue", "green","yellow"];                 //step3

function nextSequence(){                                           //step1

    var randomNumber = Math.floor(Math.random() * 4 );             //step2
    var randomChosenColour = buttonColours[randomNumber];          //step4  
    // console.log(randomChosenColour);          check random colors displayed in console by calling nextSequence();
    gamePattern.push(randomChosenColour);                          //step6
    
    var buttonId = ('#' + randomChosenColour)  ;                   //step7
     $(buttonId).fadeIn(200).fadeOut(200).fadeIn(200);             //step8

    
        var buttonSound = ("sounds/"+ randomChosenColour +".mp3")  //step9
        var audio = new Audio(buttonSound);
        audio.play();
    
    
}



