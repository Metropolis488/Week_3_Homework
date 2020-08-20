document.getElementById("generate").addEventListener("click", bigLoop);
var bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var littleLetters = "abcdefghijklmnopqrstuvwxyz";
var randNumbers = "0123456789";
var happyChar = "!@#$%^&*()[]{}_-/?:;,.<>|";
function bigLoop() { 
  var howManyChar = prompt("how many characters?");
  var upper = confirm("upper case?");
  var lower = confirm("lower case?");
  var rand = confirm("numbers?");
  var speC = confirm("special?");
  var total = [];
  if (upper === true) {
      total += bigLetters;
  } if (lower === true) {
      total += littleLetters;
  } if (rand === true) {
      total += randNumbers;
  } if (speC === true) {
      total += happyChar;
  } if (upper === false && lower === false && rand === false && speC === false) {
    alert("You have to pick something!");
  }
  var result = '';
  for (var i = 0; i < howManyChar; i++) {
    result += total[Math.floor(Math.random() * total.length)];
    }
  document.getElementById("password").value = result;      
  }

// this was the first way I did the generator... will work beyond arrays
// function makeid(length) {
//   var result           = '';
//   var charactersLength = charPopulation.length;
//   for ( var i = 0; i < length; i++ ) {
//      result += charPopulation.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }
