// 13. Write a program that determines the minutes since midnight, Jan
// 1, 1970 and assigns it to a variable that hasn't been declared
// beforehand. Use any variable you like to represent the Date object.

// Create a new Date object
var currentDate = new Date();

// Get the number of milliseconds since midnight, Jan 1, 1970
var millisecondsSinceEpoch = currentDate.getTime();

// Convert milliseconds to minutes
var minutesSinceMidnight = millisecondsSinceEpoch / (1000 * 60);

// Assign the minutes since midnight to a variable that hasn't been declared beforehand
var myVariable = minutesSinceMidnight;

// Output the result
console.log("Minutes since midnight, Jan 1, 1970:", myVariable);
