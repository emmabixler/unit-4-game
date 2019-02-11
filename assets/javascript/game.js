$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var total = 0;

  $("#wins").text(wins);
  $("#losses").text(losses);

  var randomNumber = Math.floor(Math.random() * 102) + 19;
  $(".numberGuess").text(randomNumber);

  var diamondOne = Math.floor(Math.random() * 12 + 1);
  var diamondTwo = Math.floor(Math.random() * 12 + 1);
  var diamondThree = Math.floor(Math.random() * 12 + 1);
  var diamondFour = Math.floor(Math.random() * 12 + 1);

  function reset() {
    randomNumber = Math.floor(Math.random() * 102 + 19);
    console.log(randomNumber);
    $(".numberGuess").text(randomNumber);
    var diamondOne = Math.floor(Math.random() * 12 + 1);
    var diamondTwo = Math.floor(Math.random() * 12 + 1);
    var diamondThree = Math.floor(Math.random() * 12 + 1);
    var diamondFour = Math.floor(Math.random() * 12 + 1);
    total = 0;
    $("#score").text(total);
  }
  function yay() {
    alert("You won!");
    win++;
    $("#wins").text(wins);
    reset();
  }

  function loser() {
    alert("You lose!");
    losses++;
    $("#losses").text(losses);
    reset();
  }

  //set up click on picture
  $("#pic1").on("click", function() {
    total = total + diamondOne;
    $("#score").text(total);
    if (total == randomNumber) {
      yay();
    } else if (total > randomNumber) {
      loser();
    }
  });
  $("#pic2").on("click", function() {
    total = total + diamondTwo;
    $("#score").text(total);
    if (total == randomNumber) {
      yay();
    } else if (total > randomNumber) {
      loser();
    }
  });
  $("#pic3").on("click", function() {
    total = total + diamondThree;
    $("#score").text(total);
    if (total == randomNumber) {
      yay();
    } else if (total > randomNumber) {
      loser();
    }
  });
  $("#pic4").on("click", function() {
    total = total + diamondFour;
    $("#score").text(total);
    if (total == randomNumber) {
      yay();
    } else if (total > randomNumber) {
      loser();
    }
  });
});
