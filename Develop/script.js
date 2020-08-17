// some stuff I am going to need
// Math.random()
// confirm()
// prompt()
// btwn 8 and 128 characters with prompts for limit
//  Confirms (true/false) for special characters, upper case and lower case
// generate some promtpts


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var littleLetters = "abcdefghijklmnopqrstuvwxyz";
var randNumbers = "0123456789";
var happyChar = "!@#$%^&*()[]{}_-/?:;,.<>|";
var howMany = prompt("Howmany characters do you want your password to be? (min =8, max =128)");
var bigConfirm = confirm("Do you want to include UPPER case letters?  Click 'OK' for yes.");
var littleConfirm = confirm("Do you want to include LOWER case letters?  Click 'OK' for yes.");
var happyConfirm = confirm("Do you want to include special characters in your password? Click 'OK' for yes.");
// var to include in the random gen = upper (if true) + lower (if true) + special (if true)
var charPopulation;

if (bigConfirm === true && littleConfirm === false && happyConfirm === false) {
  charPopulation = bigLetters;
} else if (bigConfirm === true && littleConfirm === true && happyConfirm === false) {
  charPopulation = bigLetters + littleLetters;
} else if (bigConfirm === true && littleConfirm === true && happyConfirm === true) {
  charPopulation = bigLetters + littleLetters + happyChar;
} else if (bigConfirm === false && littleConfirm === true && happyConfirm === false) {
  charPopulation = littleLetters;
} else if (bigConfirm === false && littleConfirm === true && happyConfirm === true) {
  charPopulation = littleLetters + happyChar;
} else if (bigConfirm === true && littleConfirm === false && happyConfirm === true) {
  charPopulation = bigLetters + happyChar;
} else if (bigConfirm === false && littleConfirm === false && happyConfirm === true) {
  charPopulation = happyChar;
} else if (bigConfirm === false && littleConfirm === false && happyConfirm === false) {
  alert("You have to pick something.") // this part needs to wrap the entire above section in a loop
}

console.log(charPopulation);

function makeid(length) {
  var result           = '';
  var charactersLength = charPopulation.length;
  for ( var i = 0; i < length; i++ ) {
     result += charPopulation.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log(makeid(howMany));