var randomNum = Math.floor((Math.random() * 100 ) + 1);
console.log(randomNum);
var clearButton = document.querySelector('#clear-button');
var guessButton = document.querySelector('#guess-button')
var mainInput = document.querySelector('#main-input');
var displayNumber = document.querySelector('.display-number');
var highLow = document.querySelector('.high-low');

clearButton.addEventListener('click',function(event){
    event.preventDefault();
    console.log(mainInput);
    form.reset();
    // userGuess.parentNode.removeChild(elem);
  });

guessButton.addEventListener('click', function(event){
  event.preventDefault();
  var userGuess = mainInput.value;
  var usingGuess = parseInt(userGuess);
  displayNumber.innerText = usingGuess;
  if (usingGuess < randomNum){
    var userGuess = mainInput.value;
    var usingGuess = parseInt(userGuess);
    highLow.innerText = "Your Guess is too Low.";
  } else if (usingGuess > randomNum){
    highLow.innerText = "Your Guess is too High.";
  } else if (usingGuess === randomNum){
    highLow.innerText = "BOOM";
  }
  if (isNaN(usingGuess)){
    displayNumber.innerText = "??";
    highLow.innerText = "Enter an actual number, bitte";
  } else if (usingGuess < 1 || usingGuess > 100){
    highLow.innerText = "Please enter a number between zero and one hundred";
  }
})
