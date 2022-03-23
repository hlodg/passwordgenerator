// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

// prompt to select password criteria, on click of generate button
// select Length between 8 and 128
// prompt choice  lowercase
// prompt choice upper case
// prompt choice special characters
// prompt choice numberic
// store user input in variables
// create dialogue "You selected...."
// password is generated
// the password is either displayed in an alert or written to the page

var length = prompt("Please choose a password length between 8 and 128.");
var lowercase= prompt("Do you want your password to include lowercase letters? Y/N")
var uppercase= prompt("Do you want your password to include UPPERCASE letters? Y/N")
var numbers= prompt("Do you want your password to include numbers? Y/N")
var characters= prompt ("Do you want your password to include special characters? Y/N")


  generatePassword(){

  }

  var password = generatePassword();
  
  // populates the password in the textbox
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
