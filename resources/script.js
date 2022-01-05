// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function main() {
  window.alert("Please select the criteria for your password remember that is must include atleast one of the options.");
  passwordCriteria.updateUpper();//window.prompt("Would you like UPPER CASE letters? y/n");
  passwordCriteria.updateLower();//window.prompt("Would you like lower case letters? y/n");
  passwordCriteria.updateNumbers();//window.prompt("Would you like numbers? y/n");
  passwordCriteria.updateSpecial();//window.prompt("Would you like special characters? (-?!/\) y/n");
  passwordCriteria.updateLength();//window.prompt("How many characters would you like in your password? 8-128");
}

// Add event listener to generate button
generateBtn.addEventListener("click", main);
//Player's attributes.
var passwordCriteria = {
  upper : "",
  updateUpper: function() {
    var placeholder = window.prompt("Would you like UPPER CASE letters? y/n");
    placeholder = placeholder.toLocaleLowerCase();
    if (placeholder === "y" || placeholder === "yes") {
      this.upper = 'yes';
      console.log(this.upper);
    } else if (placeholder === "n" || placeholder === "no") {
      this.upper = 'no';
      console.log(this.upper);
    } else {
      this.updateUpper();
    }
  },
  lower:"",
  updateLower: function() {
    var placeholder = window.prompt("Would you like lower case letters? y/n");
    placeholder = placeholder.toLocaleLowerCase();
    if (placeholder === "y" || placeholder === "yes") {
      this.lower = 'yes';
      console.log(this.lower);
    } else if (placeholder === "n" || placeholder === "no") {
      this.lower = 'no';
      console.log(this.lower);
    } else {
      this.updateLower();
    }
  },
  numbers:"",
  updateNumbers: function() {
    var placeholder = window.prompt("Would you like numbers? y/n");
    placeholder = placeholder.toLocaleLowerCase();
    if (placeholder === "y" || placeholder === "yes") {
      this.numbers = 'yes';
      console.log(this.numbers);
    } else if (placeholder === "n" || placeholder === "no") {
      this.numbers = 'no';
      console.log(this.numbers);
    } else {
      this.updateNumbers();
    }
  },
  special:"",
  updateSpecial: function() {
    var placeholder = window.prompt("Would you like special characters? (-?!/\) y/n");
    placeholder = placeholder.toLocaleLowerCase();
    if (placeholder === "y" || placeholder === "yes") {
      this.special = 'yes';
      console.log(this.special);
    } else if (placeholder === "n" || placeholder === "no") {
      this.special = 'no';
      console.log(this.special);
    } else {
      this.updateSpecial();
    }
  },
  length:"",
  updateLength: function() {
    var placeholder = window.prompt("How many characters would you like in your password? 8-128");
    placeholder = parseInt(placeholder);
    if (placeholder >= 8 && placeholder <= 128) {
      this.length = placeholder;
      console.log(this.length);
    } else {
      this.updateLength();
    }
  },
};