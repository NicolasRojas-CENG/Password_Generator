const upperList = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const lowerList = "abcdefghijklmnñopqrstuvwxyz";
const numbersList = "0123456789";
const symbolsList = "!@#$%^&*()_+=";
var password;

var passwordCriteria = {
  upper : "",
  updateUpper: function() {
    var placeholder = window.prompt("Would you like UPPER CASE letters? y/n");
    if (placeholder == null) {
      throw new Error ("You have canceled password generation.");
    }
    placeholder = placeholder.toLocaleLowerCase();
    if (placeholder === "y" || placeholder === "yes") {
      this.upper = 'yes';
    } else if (placeholder === "n" || placeholder === "no") {
      this.upper = 'no';
    } else {
      this.updateUpper();
    }
  },
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
  password:"",
  reset: function () {
    this.password = "";
  },
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function main() {
  window.alert("Please select the criteria for your password. Remember that is must include at least one of the options.");
  gatherAnswers();
  verifyAnswers();
  passwordGen();
  writePassword();
  passwordCriteria.reset();
}

function gatherAnswers(){
  passwordCriteria.updateUpper();
  passwordCriteria.updateLower();
  passwordCriteria.updateNumbers();
  passwordCriteria.updateSpecial();
  passwordCriteria.updateLength();
}

function verifyAnswers(){
  if (passwordCriteria.upper === "no" && passwordCriteria.lower === "no" && passwordCriteria.numbers === "no" && passwordCriteria.special === "no"){
    window.alert("Please select an option of characters as yes for the password to generate.");
    gatherAnswers();
  }
}

function passwordGen() {
  var i = 0
  while  (i < passwordCriteria.length) {
    var selector = verifyCharSelector();
    caseBranch = Math.floor(Math.random() * selector.length);
    switch (selector.charAt(caseBranch)){
      case "0":
         var char = Math.floor(Math.random()* upperList.length);
         passwordCriteria.password = passwordCriteria.password.concat(upperList.charAt(char));
        break;
      case "1":
        var char = Math.floor(Math.random()* lowerList.length);
         passwordCriteria.password = passwordCriteria.password.concat(lowerList.charAt(char));
        break;
      case "2":
        var char = Math.floor(Math.random()* numbersList.length);
         passwordCriteria.password = passwordCriteria.password.concat(numbersList.charAt(char));
        break;
      case "3":
        var char = Math.floor(Math.random()* symbolsList.length);
         passwordCriteria.password = passwordCriteria.password.concat(symbolsList.charAt(char));
        break;
    }
    i++;
  }
}

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

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordCriteria.password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", main);