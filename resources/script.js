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
    var placeholder = window.prompt("Would you like UPPER CASE letters? y/n");
    /*Used to catch a non-fatal error caused by .toLowerCase() later on.
    Not really necesary.*/ 
    if (placeholder == null) {
      throw new Error ("You have canceled password generation.");
    }
    /*The if statement checks for valid answers.
    If correct, asigns the value to the upper property.
    Else forces the user to answer again.*/ 
    //Allows two possible answers for yes.
    placeholder = placeholder.toLocaleLowerCase();
    if (placeholder === "y" || placeholder === "yes") {
      this.upper = 'yes';
    } else if (placeholder === "n" || placeholder === "no") { //Allows two possible answers for no.
      this.upper = 'no';
    } else {
      this.updateUpper();
    }
  },
  //All properties and methods follow the logic as upper and updateUpper().
  lower:"",
  updateLower: function() {
    var placeholder = window.prompt("Would you like lower case letters? y/n");
    if (placeholder == null) {
      throw new Error ("You have canceled password generation.");
    }
    placeholder = placeholder.toLocaleLowerCase();
    if (placeholder === "y" || placeholder === "yes") {
      this.lower = 'yes';
    } else if (placeholder === "n" || placeholder === "no") {
      this.lower = 'no';
    } else {
      this.updateLower();
    }
  },
  numbers:"",
  updateNumbers: function() {
    var placeholder = window.prompt("Would you like numbers? y/n");
    if (placeholder == null) {
      throw new Error ("You have canceled password generation.");
    }
    placeholder = placeholder.toLocaleLowerCase();
    if (placeholder === "y" || placeholder === "yes") {
      this.numbers = 'yes';
    } else if (placeholder === "n" || placeholder === "no") {
      this.numbers = 'no';
    } else {
      this.updateNumbers();
    }
  },
  special:"",
  updateSpecial: function() {
    var placeholder = window.prompt("Would you like special characters? (-?!/\) y/n");
    if (placeholder == null) {
      throw new Error ("You have canceled password generation.");
    }
    placeholder = placeholder.toLocaleLowerCase();
    if (placeholder === "y" || placeholder === "yes") {
      this.special = 'yes';
    } else if (placeholder === "n" || placeholder === "no") {
      this.special = 'no';
    } else {
      this.updateSpecial();
    }
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
  if (passwordCriteria.upper === "no" && passwordCriteria.lower === "no" && passwordCriteria.numbers === "no" && passwordCriteria.special === "no"){
    window.alert("Please select an option of characters as yes for the password to generate.");
    gatherAnswers();
  }
}

//Function used to generate the password.
function passwordGen() {
  var i = 0
  //Loop to gather all the characters requested by the user for the length.
  while  (i < passwordCriteria.length) {
    //Variable to hold the possible cases that the code can execute, based on user answers.
    var selector = verifyCharSelector();
    //Variable to hold the actual case to fall into.
    caseBranch = Math.floor(Math.random() * selector.length);
    //Switch to gather one desired character for the user, per loop iteration.
    switch (selector.charAt(caseBranch)){
      /*All cases follow same logic.
      Uses a random number to select a character from one of the lists at the top of the File.*/
      case "0"://Upper case characters.
         var char = Math.floor(Math.random()* upperList.length);
         passwordCriteria.password = passwordCriteria.password.concat(upperList.charAt(char));
        break;
      case "1"://Lower case characters.
        var char = Math.floor(Math.random()* lowerList.length);
         passwordCriteria.password = passwordCriteria.password.concat(lowerList.charAt(char));
        break;
      case "2"://Number characters.
        var char = Math.floor(Math.random()* numbersList.length);
         passwordCriteria.password = passwordCriteria.password.concat(numbersList.charAt(char));
        break;
      case "3"://Symbol characters.
        var char = Math.floor(Math.random()* symbolsList.length);
         passwordCriteria.password = passwordCriteria.password.concat(symbolsList.charAt(char));
        break;
    }
    i++;
  }
}

//Function used to create the list of possible switch cases for passwordGen(). 
function verifyCharSelector(selector, comparator){
  var caseSelectors = "";
  if (passwordCriteria.upper == "yes"){
    caseSelectors = caseSelectors.concat("0");
  }
  if (passwordCriteria.lower == "yes"){
    caseSelectors = caseSelectors.concat("1");
  }
  if (passwordCriteria.numbers == "yes"){
    caseSelectors = caseSelectors.concat("2");
  }
  if (passwordCriteria.special == "yes"){
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