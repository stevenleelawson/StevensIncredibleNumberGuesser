var randomNum = Math.floor((Math.random() * 100 ) + 1);
console.log(randomNum);
var clearButton = document.querySelector('#clear-button');
var clearClicked = document.getElementsByClassName('used')[0];
var guessButton = document.querySelector('#guess-button');
var resetButton = document.querySelector('#reset-button');
var mainInput = document.querySelector('#main-input');
var displayNumber = document.querySelector('.display-number');
var highLow = document.querySelector('.high-low');
var usingGuess;

  mainInput.addEventListener('keyup', function(){
    clearButton.disabled = false;
    resetButton.disabled = false;
    });





function blah (){
  var userGuess = mainInput.value;
  usingGuess = parseInt(userGuess);
  if (usingGuess < randomNum){
    highLow.innerText = "Your Guess is too Low.";
  } else if (usingGuess > randomNum){
    highLow.innerText = "Your Guess is too High.";
  } else if (usingGuess === randomNum){
    highLow.innerText = "BOOM";
  }
}
// function disabledButton(input){
//   if (document.getElementById('main-input').value === 0){
//     clearButton.disabled = true;
//   } else {
//     clearButton.disabled = false;
//   }
// }
// function activeButton (){
//     clearButton.disabled = false;
//     resetButton.disabled = false;
//     if(mainInput.value = ' '){
//       clearButton.disabled = true;
//       resetButton.disabled = true;
//     } else {
//       activeClear = false;
//       activeReset = false;
//     }
// };


clearButton.addEventListener('click',function(event){
    event.preventDefault();
    var userGuess = mainInput.value;
    var usingGuess = parseInt(userGuess);
    form.reset();
    displayNumber.innerText = "??";
  });

resetButton.addEventListener('click', function(event){
  event.preventDefault();
  form.reset();
  displayNumber.innerText = "??";
  highLow.innerText = "Please enter a number";
})
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
