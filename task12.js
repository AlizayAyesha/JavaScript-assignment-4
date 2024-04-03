// Write a program that shows the message “First fifteen days of the
// month” if the date is less than the 16th of the month else shows “Last
// days of the month”.

// Get the current date
var currentDate = new Date();

// Get the day of the month
var dayOfMonth = currentDate.getDate();

// Check if the day of the month is less than 16
if (dayOfMonth < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}

