// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // prompt to select password criteria, on click of generate button

  var userLength = prompt("Please choose a password length between 8 and 128.");//store user password length as variable
  if (userLength<8||userLength>128){
    alert("You must enter a password of at least 8 characters and less than 128 characters.");
  return null;
  }// if user returns something other than specified range

  // select length between 8 and 128 string into integer
  userLengthInt=parseInt(userLength);

  var selectedCharTypes = []

  var userLowercase= prompt("Do you want your password to include lowercase letters? YES/N0").toUpperCase;// store user lowercase letters selection as a variable
  if(!userLowercase=="YES"||!userLowercase=="NO"){
    alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
    return null;
  }

  if (userLowercase=="YES") {
    selectedCharTypes.push("lower");
  }

  // prompt choice upper case
  var userUppercase= prompt("Do you want your password to include UPPERCASE letters? Y/N");// prompt choice upper case
  if(!userUppercase=="YES"||!userUppercase=="NO"){
    alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
    return null;
  }

  if (userUppecase=="YES") {
    selectedCharTypes.push("upper");
  }


  // prompt choice numeric boolean
  var userNumbers= prompt("Do you want your password to include numbers? Y/N");
  if(!userNumbers=="YES"||!userNumbers=="NO"){
    alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
    return null;
  }

  if (userNumbers=="YES") {
    selectedCharTypes.push("number");
  }

  // prompt choice special characters boolean
  var userSpecialChars= prompt ("Do you want your password to include special characters? YES/NO");
  if(!userSpecialChars=="YES"||!userSpecialChars=="NO"){
    alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
    return null;
  }

  if (userSpecialChars=="YES") {
    selectedCharTypes.push("special");
  }

  if (selectedCharTypes.length == 0) {
    alert("No character types selected. Please say yes to at least one type.");
    return null;
  }

  // Generate password

  // Create arrays to pick randomly from
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialChars = ["!","@","#","$","%","^","&","*"];

  var password = "";
  var i=0;
  while(i<userLengthInt) {
    var charType = math.floor(math.random()*(3-0)+0);
    var randomChar = "";
    // lowerCase
    if(charType==0) {
      
    }
    i++;
  }
  var randomCarType= math.
}

// Write password to the #password input 
function writePassword() {

  var password = generatePassword();

  // populates the password in the textbox
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// condition user did not input anything

//create arrays for types of characters possible

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

