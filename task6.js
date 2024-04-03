// 6. Write a program that simulates a dice using random() method of JS
// Math class. Display the value of dice in your browser.

function rollDice() {
    // Generate a random number between 1 and 6 (inclusive) to simulate rolling a dice
    var diceValue = Math.floor(Math.random() * 6) + 1;

    // Display the value of the dice in the browser
    document.getElementById("diceValue").innerText += diceValue;
    displayRandomDiceValue()
}