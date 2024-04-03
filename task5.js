// 5. Write a program that takes a positive integer from user & display the
// following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userInput = prompt("Enter a positive number:")

var number= parseInt(userInput)

if(isNaN(number) || number <= 0){
    alert("invalide input please enter a positive number:")
} else {
    var roudOffValue = Math.round(number)
    var floorValue =Math.floor(number)
    var ceilValue = Math.ceil(number)

document.write("<p>Number:" + number + "</p>")
document.write("<p>Round Off Value:" + roudOffValue + "</p>")
document.write("<p>Floor Value:" + floorValue + "</p>")
document.write("<p>Ceil Value:" + ceilValue + "</p>") 
}