// isEven
function isEven(num){
	return num % 2 === 0;
}

// factorial(4) 4 x 3 x 2 x 1
// multipling from 1 is much convinient
function factorial(num){
  //define a result variable
  var result = 1;
  //calculate factorial and store value in result
  for(var i = 2; i <= num; i++){
  	result *= i;
  }
  //return the result variable
  return result;
}

// kebabToSnake
function kebabToSnake(str) {
  //replace all '-' with "_"'s
  //g flag is a kind of RegExp
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;

}






