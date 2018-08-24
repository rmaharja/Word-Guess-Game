    //Grab the references of DOM ...Good practice to use "$" for elements from DOM

var guessesLeft = document.getElementById("guesses-left");
var newGameButton = document.getElementById("new-game-button");
var placeholders = document.getElementById("placeholders");
var guessedLetters = document.getElementById("guessed-letters");
var victories = document.getElementById("victories");
var losses = document.getElementById("losses");


//Variables:
var wordBank = ["HUGE", "YUGE", "BIGLY", "BELIEVE ME","STUPID", "LOSER", "MORON", "FIRE AND FURY", "GREAT", "INCREDIBLE", "COVFEFE", "FAKE NEWS", "TREMENDOUS", "MONEY", "BILLIONS AND BILLIONS", "CLASSY", "WINNING", "ZERO", "BUILD A WALL", "MAKE AMERICA GREAT AGAIN", "WRONG", "PUTIN", "YOURE FIRED", "BING", "BONG", "BUM BUM BUM", "VERY LONG AND VERY HARD", "I LOVE YOU", "I KNOW WORDS", "WE EAT MCDONALDS", "IM REALLY RICH", "MELANIA", "IVANKA", "IT DID NOT HAPPEN", "ITS GOING TO BE ONLY", "NASTY" ];
var victories = 0;
var ko = 0;
var guessesLeft = 7;
var gameOn = false;
var pickedWord = ""; //randomword
var pickedWordPlaceholderArr = []; //underscores
var guessedLetterBank = []; //userguesses
var incorrectLetterBank = []; //wrongletter


//reset







//newGame function to reset everything
function newGame() {
  alert("Do you have what it takes to build a Wall?");
  alert( "...I mean play this Guessing game?")
  alert("Win Millions and Billions if you win.")
  alert( "Press a key to guess the word.")
  guessesLeft = 7;
  gameOn = true;
  pickedWordPlaceholderArr = [];
  guessedLetterBank = [];
  incorrectLetterBank = [];


  document.getElementById("guesses-left").innerHTML = guessesLeft;
  document.getElementById("guessed-letters").innerHTML = incorrectLetterBank;
  // pick new word

  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(pickedWord);

  //and creat placeholders of  pickedWord
  for (var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] === " ") {
      pickedWordPlaceholderArr.push("\u00A0"+"\u00A0");
    }
    else {
      pickedWordPlaceholderArr.push("_ ");
    }
  }

  //Add event listener for new game button
  //$newGameButton.addEventListener ( "click", newGame());
  //put info into the DOM (text'C'ontent not text'c'ontent); .join('') takes away the commas in array.
  
  document.getElementById("placeholders").innerHTML = pickedWordPlaceholderArr.join('');
}

//Letter Guess Fucntion start -->

document.onkeyup = function (event) {
  guessedLetterBank = event.key.toUpperCase();

  // function letterGuess (letter) {
  //Make sure the game does not run without hitting the new game button, and checking if letter is existing inside of the word.
  if (gameOn === true && pickedWord.indexOf(guessedLetterBank) > -1) {
    //Run Game
    console.log("correct");
    for (var i = 0; i < pickedWord.length; i++) {


      if (pickedWord[i] === guessedLetterBank) {
        pickedWordPlaceholderArr[i] = guessedLetterBank;

        document.getElementById("placeholders").innerHTML = pickedWordPlaceholderArr.join(" ");

      }
    }
    //if arrayCheck of placeholders=0, then all letters guessed correctly. Winner.
      arrayCheck = pickedWordPlaceholderArr.includes("_ ");
      if (arrayCheck == false) {
        victories++;
        document.getElementById("victories").innerHTML= victories;
        alert("Don't you post fake News of your Victory.");
        alert( "Press Cancel if you don't want to play another game")
        alert( "Good Choice.  Let's play again.")
        newGame();
        //do something to start a new game and announce victory;
      }
  }


  else {
    alert("WRONG")
    //put wrong letter into incorrectly used letter bank
    incorrectLetterBank.push(guessedLetterBank);
  document.getElementById("guessed-letters").innerHTML = incorrectLetterBank;

    //minus one for guessing wrong
  guessesLeft--;
  document.getElementById("guesses-left").innerHTML = guessesLeft;
  if (guessesLeft<1){
    alert ("You're a Yuge failure. You're FIRED!!")
    alert(" I know words");
    alert( pickedWord+ " was the word")

    alert( "Try Again");
    losses++;
    document.getElementById("losses").innerHTML= losses;
    newGame();
  }

  //if guesses left is less than one, game ove      


  }
    
  }

