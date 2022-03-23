// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
function writePassword() {

// prompt to select password criteria, on click of generate button

var userLength = prompt("Please choose a password length between 8 and 128.");//store user password length as variable
if (userLength<8||userLength>128){
  alert("You must enter a password of at least 8 characters and less than 128 characters.");
return null;
}// if user returns something other than specified range

// select length between 8 and 128 string into integer

var userLowercase= prompt("Do you want your password to include lowercase letters? YES/N0").toUpperCase;// store user lowercase letters selection as a variable
if(!userLowercase=="YES"||!userLowercase=="NO"){
  alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
  return null;
}

// prompt choice upper case
var userUppercase= prompt("Do you want your password to include UPPERCASE letters? Y/N");// prompt choice upper case
if(!userUppercase=="YES"||!userUppercase=="NO"){
  alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
  return null;
}


// prompt choice numeric boolean
var userNumbers= prompt("Do you want your password to include numbers? Y/N");
if(!userNumbers=="YES"||!userNumbers=="NO"){
  alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
  return null;
}

// prompt choice special characters boolean
var userCharacters= prompt ("Do you want your password to include special characters? Y/N");
if(!userCharacters=="YES"||!userCharacters=="NO"){
  alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
  return null;
}

  generatePassword()
  var password = generatePassword();

  // populates the password in the textbox
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// condition user did not input anything

//create arrays for types of characters possible
var length = ["8","9","10","11","12","13","14","15","16","17","18","19","20", "21", "22","23", "24", "25", "26", "27", "28", "29", "30"]

// create dialogue "You selected...."
// password is generated
// the password is either displayed in an alert or written to the page
  
//use randomizer function to generate characters

//create generatePassword ()- Take values above and generate a password

function generatePassword(){
  return "Password";
}

// create an empty array that represents final password

// join arrays together based on user input

// randomizer function - characters from the joined arrays

// pushes one character from each of selected arrays into final password array 

// transform array into string 
// array.join()

