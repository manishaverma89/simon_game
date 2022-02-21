// The NOT operator (!) returns true for false statements and false for true statements

//step 1 Creating a new pattern

var start = false;             //step23
var level = 0;
var userClickedPattern = [];
var gamePattern = [];         //step5

buttonColours = ["red", "blue", "green", "yellow"]; //step3

function nextSequence() {                                 //step1
  userClickedPattern = [];                               //step32
  level++;                                                 // step25
  $("#level-title").text("Level " + level);             // step26
  var randomNumber = Math.floor(Math.random() * 4);        //step2
  var randomChosenColour = buttonColours[randomNumber];    //step4
  // console.log(randomChosenColour);        check random colors displayed in console by calling nextSequence();

  gamePattern.push(randomChosenColour);                     //step6


  //step 2 Show the Sequence to the User with Animations and Sounds

  var buttonId = "#" + randomChosenColour;                                 //step7
  $(buttonId).fadeIn(200).fadeOut(200).fadeIn(200);                       //step8
  playSound(randomChosenColour);
  animatePress(randomChosenColour);

  // var buttonSound = ("sounds/"+ randomChosenColour +".mp3")           //step9
  // var audio = new Audio(buttonSound);
  // audio.play();      //code added to function playSound()
}                                                             //End of nextSequence();

//step 3 checking which button is pressed

$(".btn").click(function () {                        //step10

  var userChosenColour = $(this).attr("id");        //step11

  userClickedPattern.push(userChosenColour);        //step12

  //  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);         //step28
});


//step 4 Add Sounds to Button Clicks


function playSound(name) {                //step15
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


//step5 Add Animations To User Clicks

function animatePress(currentColour) {    //step18
  $(".btn").addClass("pressed");          //step19,20
  setTimeout(function () {                //step21
    $(".btn").removeClass("pressed");
  }, 100);
}


//step6 Start The Game

$(document).keypress(function () {           //step22

  if (!start) {                              // (!start is "false"  and returns "true")

    $("#level-title").text("level" + level); // step24
    nextSequence();                          // step22
    start = true;                            // nextSequence() is called for the first time
  }                                          // when any keypress has been occured
});


//step7 Check the User's Answer Against the Game Sequence8

function checkAnswer(currentLevel) {                                                 //step27

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {              //step29
    console.log("Success");
  }
  if (userClickedPattern.length === gamePattern.length) {                            //step30
    setTimeout(function () {                                                         //step31
      nextSequence();
    }, 1000);
  } else {
    console.log("wrong");

//step8 Game Over 

    playSound("wrong");                                                               //step33

    $("body").addClass("game-over");                                                  //step34
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 1000);

    $("#level-title").text("Game Over, Press Any Key To restart");                    //step35
    
}

}

//step9  Restart The Game





