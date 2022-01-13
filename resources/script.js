/* The strings used to create the passwords.
They are constants as they will not change.*/
const upperList = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const lowerList = "abcdefghijklmnñopqrstuvwxyz";
const numbersList = "0123456789";
const symbolsList = "!@#$%^&*()_+=";

//Object to contain password creation information, and the password itself.
var passwordCriteria = {
  //For upper case characters.
  upper : "",
  //To update the upper property.
  updateUpper: function() {
    this.upper = window.confirm("Would you like UPPER CASE letters?");
  },
  lower:"",
  updateLower: function() {
    this.lower = window.confirm("Would you like lower case letters?");
  },
  numbers:"",
  updateNumbers: function() {
    this.numbers = window.confirm("Would you like numbers?");
  },
  special:"",
  updateSpecial: function() {
    this.special = window.confirm("Would you like special characters? !@#$%^&*()_+= ");
  },
  length:"",
  updateLength: function() {
    var placeholder = window.prompt("How many characters would you like in your password? 8-128");
    if (placeholder == null) {
      throw new Error ("You have canceled password generation.");
    }
    placeholder = parseInt(placeholder);
    if (placeholder >= 8 && placeholder <= 128) {
      this.length = placeholder;
    } else {
      this.updateLength();
    }
  },
  //Saves the password generated.
  password:"",
  //Resets the password for more password generations.
  reset: function () {
    this.password = "";
  },
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Main function of the code, where all other functions are called from.
function main() {
  window.alert("Please select the criteria for your password. Remember that is must include at least one of the options.");
  gatherAnswers();
  verifyAnswers();
  passwordGen();
  writePassword();
  passwordCriteria.reset();
}

//Function used to gather the answers from the user.
function gatherAnswers(){
  passwordCriteria.updateUpper();
  passwordCriteria.updateLower();
  passwordCriteria.updateNumbers();
  passwordCriteria.updateSpecial();
  passwordCriteria.updateLength();
}

//Function used to verify that at least one of the options was set as yes.
function verifyAnswers(){
  if (!passwordCriteria.upper && !passwordCriteria.lower && !passwordCriteria.numbers && !passwordCriteria.special){
    window.alert("Please select an option of characters as 'ok' for the password to generate.");
    gatherAnswers();
  }
}

//Function used to generate the password.
function passwordGen() {
  //debugger;
  var i = 0
  var remover = 0;
  //Variable to hold the possible cases that the code can execute, based on user answers.
  var selector = check = verifyCharSelector();
  //Loop to gather all the characters requested by the user for the length.
  while  (i < passwordCriteria.length) {
    //Variable to hold the actual case to fall into.
    caseBranch = Math.floor(Math.random() * selector.length);
    //Switch to gather one desired character for the user, per loop iteration.
    switch (selector.charAt(caseBranch)){
      /*All cases follow same logic.
      Uses a random number to select a character from one of the lists at the top of the File.*/
      case "0"://Upper case characters.
         var char = Math.floor(Math.random()* upperList.length);
         passwordCriteria.password = passwordCriteria.password.concat(upperList.charAt(char));
         remover = 0;
        break;
      case "1"://Lower case characters.
        var char = Math.floor(Math.random()* lowerList.length);
         passwordCriteria.password = passwordCriteria.password.concat(lowerList.charAt(char));
         remover = 1;
        break;
      case "2"://Number characters.
        var char = Math.floor(Math.random()* numbersList.length);
         passwordCriteria.password = passwordCriteria.password.concat(numbersList.charAt(char));
         remover = 2;
        break;
      case "3"://Symbol characters.
        var char = Math.floor(Math.random()* symbolsList.length);
         passwordCriteria.password = passwordCriteria.password.concat(symbolsList.charAt(char));
         remover = 3;
        break;
    }
    if (selector.charAt(caseBranch)){
      selector = selector.replace("" + remover, "");
    }
    if (selector == ""){
      selector = check;
    }
    i++;
  }
}

//Function used to create the list of possible switch cases for passwordGen(). 
function verifyCharSelector(selector, comparator){
  var caseSelectors = "";
  if (passwordCriteria.upper == true){
    caseSelectors = caseSelectors.concat("0");
  }
  if (passwordCriteria.lower == true){
    caseSelectors = caseSelectors.concat("1");
  }
  if (passwordCriteria.numbers == true){
    caseSelectors = caseSelectors.concat("2");
  }
  if (passwordCriteria.special == true){
    caseSelectors = caseSelectors.concat("3");
  }
  return caseSelectors;
}

//Function used to display the password in the web page.
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordCriteria.password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", main);