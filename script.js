// Variables
var generateBtn = document.querySelector("#generate");
var password = "";

function generatePassword () {
var passwordLength = prompt("Enter desired password length (must be between 8 and 100 characters)");
if (passwordLength < 8 || > 100) {
  alert("Invalid password length.")
}
var lowCase = confirm("Would you like lowercase letters in your password?");
var upCase = confirm("Would you like lowercase letters in your password?");
var num = confirm("Would you like numbers in your password?");
var symb = confirm("Would you like symbols in your password?");
if (lowCase === false && upCase === false && num === false && symb === false) {
  alert("Please choose at least one option to continue.")
}

}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);