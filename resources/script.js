// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  password = "hello";
  passwordText.value = password;

}

function main() {
  window.alert("Please select the criteria for your password remember that is must include atleast one of the options.");
  window.prompt("Would you like UPPER CASE letters? y/n");
  window.prompt("Would you like lower case letters? y/n");
  window.prompt("Would you like numbers? y/n");
  window.prompt("Would you like special characters? (-?!/\) y/n");
  window.prompt("How many characters would you like in your password? 8-128");
}

// Add event listener to generate button
generateBtn.addEventListener("click", main);
