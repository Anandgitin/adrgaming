// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit-btn");
const messageDisplay = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

submitButton.addEventListener("click", function () {
    // Get the guessed number from the input
    let userGuess = parseInt(guessInput.value);
    
    // Check if the input is a valid number
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDisplay.textContent = "Please enter a valid number between 1 and 100!";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = "Attempts: " + attempts;

    // Compare the user's guess to the random number
    if (userGuess === randomNumber) {
        messageDisplay.textContent = "Congratulations! You guessed it right!";
        messageDisplay.style.color = "green";
    } else if (userGuess < randomNumber) {
        messageDisplay.textContent = "Too low! Try again.";
        messageDisplay.style.color = "red";
    } else {
        messageDisplay.textContent = "Too high! Try again.";
        messageDisplay.style.color = "red";
    }
});
