/*jslint browser:true */
/*global window*/

// Global Variables
$(document).ready(function(){
  "use strict";
  var decTimer;
  var secondsLeft = 20;
  var count = 0;
  var img = document.getElementsByClassName("character");

// Function for count down, alert user score and prevent future clicks after game is over
  function myTimer(){
    if(secondsLeft > 0){
      secondsLeft = secondsLeft - 1;
      document.getElementById("time").innerHTML = secondsLeft;
    }else {
      document.getElementById("timeLine").innerHTML = "Your time is up!";
      document.getElementById("timeLine").className = "change";

      $('#theMessage').empty();
      $('#theMessage').text("Congratulations! You clicked " + count + " characters!");
      $('#myModal').modal({
        backdrop: 'static'
      });

      var i;
      for(i = 0; i < img.length; i+=1) {
        img[i].setAttribute("data-clickable", "false");
      }
      clearInterval(decTimer);
    }
  }

// Function to Start Timer and allow image to be clicked

  function startTimer(){
    decTimer = setInterval(myTimer, 1000);
    var i;
    for(i = 0; i < img.length; i+=1) {
      img[i].setAttribute("data-clickable", "true");
    }
  }

  document.getElementById("start").addEventListener("click", startTimer);

// Function to Reload the page and to start game again

  function reloadPage(){
    window.location.reload();
  }

  document.getElementById("restart").addEventListener("click", reloadPage);

// Function to count number of clicks
  function countClicks(){
    if(this.getAttribute('data-clickable') === 'true'){
      count = count + 1;
      this.setAttribute('data-clickable', 'false');
      this.className = "clicked";
      document.getElementById("clickTotal").innerHTML = count;
    }
    if(count === 20) {
      $('#theMessage').empty();
      $('#theMessage').text("You clicked all " + count + " characters with " + secondsLeft + " seconds left to spare! You won! Congratulations! =). " +
        "Now, can you do it faster?");
      $('#myModal').modal({
        backdrop: 'static'
      });
      clearInterval(decTimer);
    }
  }

// Loop adding the onclicks to images
  var i;
  for(i = 0; i < 20; i+=1){
    document.getElementsByClassName("character")[i].addEventListener("click", countClicks);
  }

  $('.fixedbox').on("click",verifiedFunc);

  function verifiedFunc(){
    $('#theMessage').empty();
    $('#theMessage').text("Hi, this repo has been verified for no errors! ---Alejandra---");
    $('#myModal').modal({
      backdrop: 'static'
    });
  }
});
