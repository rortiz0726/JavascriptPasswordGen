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
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var passwordLength = 12;
  var password = "";
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
