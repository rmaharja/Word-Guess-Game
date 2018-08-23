//Grab the references of DOM ...Good practice to use "$" for elements from DOM
var $guessesLeft= document.getElementById("guesses-left");
var $newGameButton= document.getElementById("new-game-button");
var $placeholders= document.getElementById("placeholders");
var $guessedLetters= document.getElementById("guessed-letters");
var $victories= document.getElementById("victories");
var $ko= document.getElementById("k-o");


//Variables:
var wordBank= ["RYU", "KEN", "GUILE", "VEGA", "AKUMA", "CAMMY", "DHALSIM", "ZANGIEF", "SAGAT", "BLANKA", "BALROG", "IBUKI", "ROLENTO", "M BISON", "E HONDA"];
var victories= 0;
var ko= 0;
var guessesLeft= 5;
var gameOn= false;
var pickedWord= "";
var pickedWordPlaceholderArr=[];
var guessedLetterBank= [];
var incorrectLetterBank= [];

//newGame function to reset everything
function newGame (){
  guessesLeft=5;
  gameOn= true;
  pickedWordPlaceholderArr= [];
  guessedLetterBank= [];
  incorrectLetterBank= [];

}
// pick new word
pickedWord= wordBank[Math.floor(Math.random()*wordBank.length)];

//and creat placeholders of  pickedWord
for (var i=0; i<pickedWord.length;i++){
    if (pickedWord[i]=== " "){
      pickedWordPlaceholderArr.push(" ");
    }
    else {
      pickedWordPlaceholderArr.push ("_");
    }
}

//Add event listener for new game button
$newGameButton.addEventListener ( "click", newGame)

//put info into the DOM (text'C'ontent not text'c'ontent); .join('') takes away the commas in array.
$guessesLeft.textContent = guessesLeft;
$placeholders.textContent= pickedWordPlaceholderArr.join('');
$guessedLetters.textContent= incorrectLetterBank;

//letterGuess function, takes in the letter you pressed and sees if it's in the selected word

function letterGuess () {
  console.log(letter);
  //Make sure the game does not run without hitting the new game button.
  if (gameRunning && guessedLetterBank.indexOf(letter)===-1){
//Run Game
guessedLetterBank.push(letter);

//Check if guessed letteris in my picked wordbank
for (vari=0; i< pickedWord.length; i++){ 
  //converting both values to all upper case for comparison, but still appear as the actual one
    if (pickedWord[i].toUpperCase()=== letter.toUpperCase()){

      pickedWordPlaceholderArr[i]= pickedWord[i];
    }
    $placeholders.textContent= pickedWordPlaceholderArr.join ("");
  }
  else{
    if (gameRunning===false){
      alert("Start a New game")
    }
    else{
      alert("Pick another letter")
    }
  }
}

//Add onkeyup even to trigger letterguess
document.onkeyup= function(event){
  letterGuess(event.key);
}
//checkIncorrect letter

//check if losing

//check if we win



// 1.press a key to guess
// 2.display letters if correct 
// 3.add to words already guessed
// 4.add to incorrect letter bank if wrong 
// 5.minus one life life if wrong
// 6.Steps 1-6 again until life=0 or word correctly guessed
// 7. If all lives lost then display "YOu lost", add to Losses. Play a sad song 
// 8. If game won, display "you won", add to wins, Play happy song. 
// 9. Start a new game button 
// Start from step 1 again. 
