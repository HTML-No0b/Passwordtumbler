// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f"];
var specialchar = ["#", "$", "%", "&", "'", "()", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "}", "~"];
var charlength = 8;

// Write password to the #password input
function passoptions() {
  let upper = confirm("Do you want uppercase?");
  console.log(upper);

  let lower = confirm("Do you want lowercase?");
  console.log(lower);

  let special = confirm("Do you want special characters?");
  console.log(special);

  let charlength = prompt("How long would you like your password (8-128)");
  console.log(charlength)

  var letterbox = []
  if (upper) {
    letterbox = letterbox.concat(uppercase);
  };
  if (lower) {
    letterbox = letterbox.concat(lowercase);
  };
  if (special) {
    letterbox = letterbox.concat(specialchar)
  }
  console.log(letterbox);
};
  
function generatePassword(){
  var password = "";
  for (let index = 0; index < charlength.length; index++) {
   var randomletter = math.floor(Math.random()* letterbox.length)
  }
  password=password + letterbox[uppercase]
  return password
};


  function writePassword() {
    passoptions();
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    var password = Math.floor(Math.random() * letterbox.length); 
    var passwordText = letterbox[i]
    // if (isNaN(charlength) || charlength < 0 || charlength > 128) {
    //   alert("Has to be 8 through 128")

    //   return true;
    // };
return
  };

  passoptions();
  generatePassword();

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  console.log("button clicked")
