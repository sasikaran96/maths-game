var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on the start / reset
document.getElementById("startreset").onclick=
function(){
  //if we are playing
  if(playing==true){
    location.reload(); //reload page

  }else{  //if we are not playing
    playing = true;
      //set score to 0
    score=0;
  document.getElementById("scorevalue").innerHTML=score;
  show("timeremaining");
  timeremaining = 60;
  document.getElementById("timeremainingvalue").innerHTML = timeremaining;

      //hide game over box1
      hide("gameOver");

      //change button to Reset
  document.getElementById("startreset").innerHTML="Reset Game";

    //startCountdown
    startCountdown();

    //generate a new Q&A

    generateQA();
  }
}


  //if we click on answer box

for(i=1; i<5; i++){
  document.getElementById("box"+i).onclick =
  function(){
    //if we are playing
    if(playing==true){
      //yess
      if(this.innerHTML == correctAnswer){
        //correct answer

        //increase score by 1
        score++;
      document.getElementById("scorevalue").innerHTML=score;
      //hide wrong box and show correctAnswer

          hide("wrong");
          show("correct");
          setTimeout(function(){
            hide("correct");
          }, 1000);

          generateQA();
      }else{
        //wrong answers
        hide("correct");
        show("wrong");
        setTimeout(function(){
          hide("wrong");
        }, 1000);

      }
    }
  }
}

        //correct?
          //yes
            //increase score
            //show correct box for 1sec
            //generate new Q&A
        //no
          //show tyr again box for 1sec


          //function




          //strat counter



          function startCountdown(){
            action = setInterval(function(){
              timeremaining -=1;
              document.getElementById("timeremainingvalue").innerHTML=timeremaining;
              if(timeremaining == 0){
                //game gameOver
                stopCountdown();
                show("gameOver");
              document.getElementById("gameOver").style.display = "block";
              document.getElementById("gameOver").innerHTML= "<p>Game Over</p><p>Your Score is "+ score +".</p>";
                  hide("timeremaining");
                  hide("correct");
                  hide("wrong");
                  playing=false;

              document.getElementById("startreset").innerHTML="Start Game";
              }
            },1000);
          }

          //stop counter

          function stopCountdown(){
              clearInterval(action);

          }

          //hide an element
          function hide(Id){
            document.getElementById(Id).style.display="none";
          }

          //show element

          function show(Id){
            document.getElementById(Id).style.display="block";
          }

          //generate question and multiple answers

          function generateQA(){
            var x = 1+Math.round(9*Math.random());
            var y = 1+Math.round(9*Math.random());
            correctAnswer = x*y;

          document.getElementById("question").innerHTML=x + "x" + y;

            var correctPosition = 1+Math.round(3*Math.random());

          document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with correct answer

            //fill other boxes with wrong answers


            var answers = [correctAnswer];
          for(i=1; i<5; i++){
            if(i != correctPosition){
              var wrongAnswer;
              do{
                wrongAnswer = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random())); //a wrong answer
              }
              while(answers.indexOf(wrongAnswer)>-1)



              document.getElementById("box"+i).innerHTML = wrongAnswer;
                  answers.push(wrongAnswer);
            }

          }

          }
