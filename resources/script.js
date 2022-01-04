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
  window.prompt("Would you like numbers? y/n");
  window.prompt("Would you like special characters? (-?!/\) y/n");
  window.prompt("How many characters would you like in your password? 8-128");
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
    }
    else if (placeholder === "n" || placeholder === "no") {
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
    }
    else if (placeholder === "n" || placeholder === "no") {
      this.lower = 'no';
      console.log(this.lower);
    } else {
      this.updateLower();
    }
  },
  numbers:"",
  special:"",
  lenght:"",
  reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 13;
    },
    refillHealth: function() {
      if (this.money >= 7) {
        window.alert("Refilling player's health by 30 for 9 dollars.");
        this.health += 30;
        this.money -= 9;
      } 
      else {
        window.alert("You don't have enough money for a refill!");
      }
    },
    upgradeAttack: function() {
      if (this.money >= 7) {
        window.alert("Upgrading player's attack by 8 for 8 dollars.");
        this.attack += 8;
        this.money -= 8;
      } 
      else {
        window.alert("You don't have enough money for an upgrade!");
      }
    }
};