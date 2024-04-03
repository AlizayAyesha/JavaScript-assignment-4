// Write a program to ask the user about his age. Calculate and show
// his birth year in your browser

        // Ask the user for their age
        var age = prompt("Please enter your age:");

        // Calculate the birth year
        var currentYear = new Date().getFullYear();
        var birthYear = currentYear - parseInt(age);

        // Display the birth year in the browser
        document.write("<p>Your birth year is: " + birthYear + "</p>");
