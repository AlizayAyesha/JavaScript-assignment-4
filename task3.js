// 3. Write a program to take password as an input from user. The
// password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 8 characters long
// d. If the password does not meet the above requirements, prompt
// the user to enter a valid password. For character codes of a-z,
// A-Z & 0-9

function isValidPassword(password) {
    var ContainsAlphabets = /[a-zA-z]/.test (password)
    var ContainsNumber = /[0-9]/.test (password)
     
    var startsWithNumber =/^[0-9]/.test (password)
    var longEnough = password.length >= 8 
    
    return ContainsAlphabets && ContainsNumber && startsWithNumber && longEnough
}

var password = prompt("Enter a password :")

while(!isValidPassword(password)){
    alert("Password is not valid please enter a valid password")
    password = prompt("Enter a password")
} 
  
alert("Password is Valid")
