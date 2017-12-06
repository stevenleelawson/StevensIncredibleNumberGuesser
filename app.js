var randomNum = Math.floor((Math.random() * 100 ) + 1);
console.log(randomNum);
var clearButton = document.getElementById('clear');
var input = document.getElementById('main-input');
var form = document.getElementById('form');
var guessButton = document.getElementById('guess');
var highLow = document.querySelector('.high-low');
var p = document.querySelector('p');
var userGuess = document.querySelector('#userGuess');

function validator () {
  var guessAsNumb = parseInt(input.value);
  if (isNaN(guessAsNumb))  {
    console.log(guessAsNumb);
    highLow.innerText ='Please enter a number';
    form.reset()
  } else if (guessAsNumb > 100 || guessAsNumb < 1){
    highLow.innerText = 'please enter a number between 1 and 100';
  }
}



  clearButton.addEventListener('click',function(e){
    form.reset();
    e.preventDefault();
    // userGuess.parentNode.removeChild(elem);
  });

  guessButton.addEventListener('click',function(event){
    highLow.innerText = "That's TOOooooooooo highlow";
    p.innerText = guessAsNumb;
    // var el = document.getElementById('info');
    // el.innerHTML = '<h2><p id="userGuess">' + guessAsNumb + '<p></h2>';
    event.preventDefault();
    validator();
  })
