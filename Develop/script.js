// Assigns the generateBTN Code
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

  var selectedCharTypes = []//creates empty variable which we will fill as user selects types of characters

  var userLowercase= prompt("Do you want your password to include lowercase letters? YES/N0").toUpperCase();// store user lowercase letters selection as a variable
  if(!userLowercase=="YES"||!userLowercase=="NO"){
    alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
    return null;
  }

  if (userLowercase=="YES") {
    selectedCharTypes.push("lower");//adds lower case characters to types of characters
  }

  // prompt choice upper case
  var userUppercase= prompt("Do you want your password to include UPPERCASE letters? YES/NO").toUpperCase();// prompt choice upper case
  if(!userUppercase=="YES"||!userUppercase=="NO"){
    alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
    return null;
  }

  if (userUppercase=="YES") {
    selectedCharTypes.push("upper");//adds upper case to charTypes variable
  }


  // prompt choice numeric boolean
  var userNumbers= prompt("Do you want your password to include numbers? YES/NO").toUpperCase();
  if(!userNumbers=="YES"||!userNumbers=="NO"){
    alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
    return null;
  }

  if (userNumbers=="YES") {
    selectedCharTypes.push("number");
  }

  // prompt choice special characters boolean
  var userSpecialChars= prompt ("Do you want your password to include special characters? YES/NO").toUpperCase();
  if(!userSpecialChars=="YES"||!userSpecialChars=="NO"){
    alert("You must enter YES or NO.");//in case the user returns anything besides yes or no
    return null;
  }

  if (userSpecialChars=="YES") {
    selectedCharTypes.push("special");
  }

  if (selectedCharTypes.length == 0) {
    alert("No character types selected. Please say yes to at least one type.");
    return null;// If the user chooses not to enter anything, then we have to start over.
  }

  // Generate password

  // Create arrays to pick randomly from
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var specialChars = ["!","@","#","$","%","^","&","*"];

  var password = ""; //creates the password to fill with the characters

  var i=0;//starts the function counting at 0 so that it initializes
  var l = selectedCharTypes.length-1;// the number of char types creates the variable to randomize the type of character in each position of your password
  while(i<userLengthInt) {
    var charTypeInt = Math.floor(Math.random()*(l-0)+0.5);//runs random variable to choose character type
    var charType = selectedCharTypes[charTypeInt];// creates new array of combining these to be object relationship
    var randomChar = "";//creates empty variable we will fill with the characters
    // lowerCase
    if(charType=="lower") {
      var randomNum = Math.floor(Math.random()*(25-0)+0);
      randomChar = lowerChars[randomNum];
    } else if(charType=="upper") {
      var randomNum = Math.floor(Math.random()*(25-0)+0);
      randomChar = upperChars[randomNum];
    } else if(charType=="number") {
      var randomNum = Math.floor(Math.random()*(8-0)+0);
      randomChar = nums[randomNum];
    } else if(charType=="special") {
      var randomNum = Math.floor(Math.random()*(25-0)+0);
      randomChar = specialChars[randomNum];//create the functions in order to choose a random character from the arrays above
    }

    password+=randomChar;// plus equal means to combine password and the random characters chosen (concatination)
    
    i++;//finishes the while loop
  }
  return password;// returns the password so that you can put it in the text box
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

