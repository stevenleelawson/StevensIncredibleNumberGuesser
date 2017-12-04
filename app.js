var randomNum = Math.floor((Math.random() * 100 ) + 1);
var clearButton = document.getElementById('clear');
var input = document.getElementById('main-input');
var form = document.getElementById('form');
var guessButton = document.getElementById('guess');
var guess = input.value;

  clearButton.addEventListener('click',function(e){
    form.reset();
    e.preventDefault();
    var elem = document.querySelector('#userGuess');
    elem.parentNode.removeChild(elem);
  });

  guessButton.addEventListener('click',function(e){
    var guessAsNumb = parseInt(input.value);
    var el = document.getElementById('info');
    // el.innerHTML = '<h2><p id="userGuess">' + guessAsNumb + '<p></h2>';
    e.preventDefault();
    if (isNaN(guessAsNumb))  {
      alert("Pleaser enter  an numberer");
      form.reset()
    } else if (guessAsNumb > 100 || guessAsNumb < 1){
      alert('please enter a number between 1 and 100');
    }
  })
  guessButton.addEventListener('click', function(e){
    var guessAsNumb = parseInt(input.value);
    var randomNum = Math.floor((Math.random() * 100 ) + 1);
    console.log(randomNum);
    console.log(guessAsNumb);
    var el = document.getElementById('info');
    if(guessAsNumb > randomNum){
      alert('too high');
      document.getElementById('appendingDom').innerHTML = '<h2>Your Last Guess was: <p>' + guessAsNumb + '</p><h6>Too high, fool!</h6>';
    } else if (guessAsNumb < randomNum){
      document.getElementById('appendingDom').innerHTML = '<h2>Your Last Guess was: <p>' + guessAsNumb + '</p><h6>Too low, schmoo!</h6>';

      alert('too low');
    } else {
      el.innerHTML ='<h2>BOOM</h2>';
    }
    // el.innerHTML = '<h2><p id="userGuess">' + guessAsNumb + '<p></h2>';
    e.preventDefault();
  })
