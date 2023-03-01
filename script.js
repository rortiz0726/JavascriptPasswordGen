// Assignment code here
//Readme 
//1. prompt the user for password criteria
//a. Password length 8-128
//b. lowercase, uppercase, special characters
//2. Validate the input. 
//3. Display password to the page.
// Write password to the #password input

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Password Generating")
  //var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  var numbers = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!@#$%^&*()";
  var allofthem = numbers+lowercase+uppercase+special
  var passwordChars = "";
  
  var passwordLength = prompt("How long is the password?");
  console.log(passwordLength)
  
  if (passwordLength < 8) { 
    alert("Too Short")
    return;
  } else if (passwordLength > 128) {
    alert("Too Long") 
  } else { 
    var charactersChoice = prompt("Choose password criteria ex. abc,ABC,123,!@#?");
    var allofthem = confirm ("Are you sure?")
    var password = "";
    chars = "";
    if (allofthem === true) {
    chars = numbers + lowercase + uppercase + special
      }
    }
let chars = "";
if (haslowercase) {
  chars += "abcdefghijklmnopqrstuvwxyz";
}
if (hasuppercase) {
  chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (hasnumbers) {
  chars += "0123456789";
}
if (hasspecial) {
  chars += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
}
for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
  console.log(password);
}
return password;
}
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 999);
  document.execCommand("copy");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
document.write("Your password is: " + password);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
