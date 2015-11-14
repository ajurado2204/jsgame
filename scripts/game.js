  var count = 0;

    function countClicks(){
      count = count + 1;
      document.getElementById("clickTotal").innerHTML = count;
    };

  var secondsLeft = 20;

  function startTimer(){
    setInterval(myTimer, 1000);
  };

  function myTimer(){
    if(secondsLeft!=0){
      document.getElementById("time").innerHTML = secondsLeft-=1;
    } else {
        document.getElementById("timeLine").innerHTML = "Your time is up!";
        document.getElementById("timeLine").className = "change";
      };
    }; 
  
    var count = 0;

    function countClicks(){
      count++;
      document.getElementById("clickTotal").innerHTML = count;
    };




  







  