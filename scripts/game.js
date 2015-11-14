  var decTimer;


  function startTimer(){
     decTimer = setInterval(myTimer, 1000);
  };

  var secondsLeft = 20;

  function myTimer(){
    if(secondsLeft > 0){
      document.getElementById("time").innerHTML = secondsLeft-=1;
    } else {
        document.getElementById("timeLine").innerHTML = "Your time is up!";
        document.getElementById("timeLine").className = "change";
        alert("Congratulations! You clicked " + count + " characters!");
        clearInterval(decTimer);
    };
  }; 
  
  var count = 0;

    function countClicks(){      
      if (this.getAttribute('data-clickable') == 'true'){
        count++;
        this.setAttribute('data-clickable', 'false');
      }
      document.getElementById("clickTotal").innerHTML = count;
    };

//CHANGE ALL getElementById to getElementsByTagName & addEventListener("click".javascript/countClicks and o
  
  
  // write a for loop

  // add data to all set to on and then after click turn to all 
  // at 0 zecond set all to off



for (i = 0; i < 20; i++){
  document.getElementsByClassName("character")[i].addEventListener("click", countClicks);
}
  

  




  







  