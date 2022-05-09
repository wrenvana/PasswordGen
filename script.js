var generateBtn = document.querySelector("#generate");

// Character generator
function generatePassword () {
  // password length
var passwordLength = prompt("Enter desired password length (must be between 8 and 100 characters)");
if (passwordLength < 8 || passwordLength > 100) {
  alert("Invalid password length.");
  generatePassword();
}
// character types
var lowCase = confirm("Would you like lowercase letters in your password?");
var upCase = confirm("Would you like uppercase letters in your password?");
var num = confirm("Would you like numbers in your password?");
var symb = confirm("Would you like symbols in your password?");
if (lowCase === false && upCase === false && num === false && symb === false) {
  alert("Please choose at least one option to continue.") 
}
  var characters = "";
  if (lowCase === true) {
  characters = characters.concat("abcdefghijklmnopqrstuvwxyz")
  }
  if (upCase === true) {
    characters = characters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }
  if (num === true) {
    characters = characters.concat ("0123456789")
  }
  if (symb === true) {
    characters = characters.concat ("!@#$%^&*()")
  }
var password = "";
var charLength = characters.length;

// for loop to select random characters
for (var i = 0; i < passwordLength; i++) {
  password += characters.charAt(Math.floor(Math.random() * charLength));
  document.querySelector("#password").setAttribute("placeholder", password)
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);