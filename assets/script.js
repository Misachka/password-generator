// Assignment code here

var generateBtn = document.querySelector("#generate");
//array for characters that will be used in password
var passwordcriteria = {
    passwordlenght: 0,
    passwordlowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    passworduppdercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    passwordnumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    passwordcharacters: ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",",
    "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"],
}


// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//adding function that will generate random password
function generatePassword() {
//will hold generated password
    var result = "";
//variables from where the information will be collected
    var passwordlenght = 0;
    var uppercase;
    var lowercase;
    var numbers;
    var specialcharacters;
  
//start point 
passwordlenght = 0;
passwordcriteria.passwordlenght = 0;
result = "";

if (passwordlenght < 8 || passwordlenght> 128) {
    passwordlenght = prompt("How many characters do you want your password to be? \choose a number between 8 and 128 characters.");
// if no number was chosen or user pressed cancel
   if  (passwordlenght === null) {
        return "Your password";
      }
      
else {
        //checks if password meets length criteria
        if (passwordlenght < 8 || passwordlenght > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your password";
        }
else {
            showPrompts();
     //keep adding characters based on criteria until passwordlength matches the length the user set
            
     if (passwordcriteria.passwordlenght < passwordlenght) {
    //if statement to make sure the user selects at least one of the criteria  
              
    if (lowercase === false && uppercase === false && numbers === false && specialcharacters === false) {
                alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
                showPrompts();
              } 
 else {
                //is user selected lowercase it will grab lc until there is space left
                //will update lenght by 1
                //randomly grabs lc letters from array
    if (lowercase === true && passwordcriteria.passwordlenght < passwordlenght) {
                  var lc = passwordcriteria.passwordlowercase[Math.floor(Math.random() * 26)]
                  result = result + lc;
                  passwordcriteria.passwordlenght++;
                }
            
                //if user selected sc it will grab sc if theres space
                //randomly grabs characters from array            
    if (specialcharacters=== true && passwordcriteria.passwordlenght < passwordlowercase) {
                  var sc = passwordcriteria.passwordcharacters[Math.floor(Math.random() * 32)]
                  result = result + sc;
                  passwordcriteria.passwordlenght++;
                } 
    if (uppercase === true && passwordcriteria.passwordlenght < passwordlenght) {
                    var uc = passwordcriteria.passworduppdercase[Math.floor(Math.random() * 26)]
                    result = result + uc;
                    passwordcriteria.passwordlenght++;
                  }

                  //if user selected numbers it will grab sc if theres space
                  //randomly grabs numbers from array 
    if (numbers === true && passwordcriteria.passwordlenght < passwordlenght) {
        var num = passwordcriteria.passwordnumbers[Math.floor(Math.random() * 10)]
        result = result + num;
        passwordcriteria.passwordlenght++;
                  }
                }
                
            }
        }
    } 
}                

return result;

function showPrompts() {
    lowercase = confirm("Do you want to use lower case letters?");
    uppercase = confirm("Do you want to use upper case letters?");
    numbers = confirm("Do you want to use numbers?");
    specialcharacters = confirm("Do you want to use any special characters?");
  }
}
generatePassword ();