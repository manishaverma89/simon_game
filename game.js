     // Creating a new pattern

var userClickedPattern = [];
var gamePattern = [];                                              //step5
                                         
buttonColours = ["red" ,"blue", "green","yellow"];                 //step3

    function nextSequence(){                                           //step1

         var randomNumber = Math.floor(Math.random() * 4 );             //step2
         var randomChosenColour = buttonColours[randomNumber];          //step4  
         // console.log(randomChosenColour);        check random colors displayed in console by calling nextSequence();
        
         gamePattern.push(randomChosenColour);                          //step6
    
         // Show the Sequence to the User with Animations and Sounds

         var buttonId = ('#' + randomChosenColour)  ;                   //step7
         $(buttonId).fadeIn(200).fadeOut(200).fadeIn(200);             //step8
         playSound(randomChosenColour);
         animatePress(randomChosenColour);
    
        // var buttonSound = ("sounds/"+ randomChosenColour +".mp3")  //step9
        // var audio = new Audio(buttonSound);
        // audio.play();      //code added to function playSound()
        
    
         }
    // checking which button is pressed


            $(".btn").click(function(){                     //step10

            var userChosenColour =  $(this).attr("id");     //step11
    
            userClickedPattern.push(userChosenColour);      //step12

            //   console.log(userClickedPattern);
            playSound(userChosenColour);
            animatePress(userChosenColour);

            
          });
   
    // Add Sounds to Button Clicks
           

         function playSound(name){                                     //step15
            var audio = new Audio("sounds/"+ name +".mp3");
            audio.play();
            
         }

        
    // Add Animations To User Clicks  
         
         function animatePress(currentColour){                     //step18
             $(".btn").addClass("pressed");                        //step19,20
             setTimeout(function() {                               //step21
                $(".btn").removeClass('pressed'); 
            }, 100);

         }

         
