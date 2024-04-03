// 4. Write a program to validate email address with following evaluation
// a. This string must contain @
// b. Ths string must contact chars
// c. The @ must have at least 1 char in front
// d. The string must contain .(dot) after @ and at least 1 char.

function isEmailValid(email)  {
    var containsAtSymbol = email.includes("@");
    var containsContactChars = /[a-zA-Z]/.test(email);

    var atIndex = email.indexOf("@");
    var charBeforeAt = atIndex > 0;

    var dotIndex = email.indexOf(".", atIndex);
    var dotAfterAtIndex = dotIndex > atIndex + 1;

    return containsAtSymbol && containsContactChars && charBeforeAt && dotAfterAtIndex;
}

var email = prompt("Enter your Email:");

if(isEmailValid(email)){
    alert("Email is valid.");
} else {
    alert("Please enter a valid email.");
}
