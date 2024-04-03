// 14. Create a Date object for the current date and time. Extract the
// hours, reset the date object an hour ahead and finally display the
// date object in your browser.

// Create a new Date object for the current date and time
var currentDate = new Date();

// Extract the current hour
var currentHour = currentDate.getHours();

// Reset the Date object an hour ahead
currentDate.setHours(currentHour + 1);

// Display the updated Date object in the browser
console.log("Updated Date object:", currentDate);

