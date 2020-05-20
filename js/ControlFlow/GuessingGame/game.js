//create secretNumber
let secretNumber = 7;

//ask user for guess
let stringGuess = prompt("Guess a number");
let guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber) {
	alert("YOU GOT IT RIGHT!");
}
//check if guess is higher
else if(guess > secretNumber){
	alert("Too high.  Guess again!");
}
else {
	alert("Too low.  Guess again!");
}