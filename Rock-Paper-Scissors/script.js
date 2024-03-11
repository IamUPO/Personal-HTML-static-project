// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(function () {
//         var loadingScreen = document.getElementById("loading-screen");
//         loadingScreen.style.opacity = "0";
//         loadingScreen.style.display = "none";
//     }, 5000);
// });

document.addEventListener("DOMContentLoaded", function () {
    // Initial setup
    var loadingScreen = document.getElementById("loading-screen");
    var viewRules = document.getElementById("view-rules");
    var gamePlay = document.querySelector(".game-play");
    var viewPlay = document.querySelector(".view-play");
    var resultElement = document.getElementById("result");
    var playerPointsElement = document.getElementById("player-points");
    var computerPointsElement = document.getElementById("computer-points");
    var playAgainButton = document.getElementById("play-again");

    // Function to show the rules view
    function showRules() {
        viewRules.style.display = "flex";
    }

    // Function to hide the rules view
    function hideRules() {
        viewRules.style.display = "none";
    }

    // Function to handle game result
    function handleGameResult(userChoice, computerChoice) {
        // Compare userChoice and computerChoice to determine the winner, loser, or tie
        var result = determineWinner(userChoice, computerChoice);

        // Display the choices made by the user and computer
        displayChoices(userChoice, computerChoice);

        // Display the game result
        displayResult(result);

        // Update the score
        updateScore(result);

        // Show the play-again button
        showPlayAgainButton();
    }

    // Function to determine the winner, loser, or tie
    function determineWinner(userChoice, computerChoice) {
        // Implement your logic here
        // Return "win" for player win, "lose" for player lose, and "tie" for a tie
        // Example logic:
        if (userChoice === computerChoice) {
            return "tie";
        } else if (/* your win condition */) {
            return "win";
        } else {
            return "lose";
        }
    }

    // Function to display the choices made by the user and computer
    function displayChoices(userChoice, computerChoice) {
        // Update the HTML content or replace the elements with the user and computer choices
        // Example:
        document.querySelector(".player .play-btn img").src = "img/icon-" + userChoice + ".svg";
        document.querySelector(".computer .play-btn img").src = "img/icon-" + computerChoice + ".svg";
    }

    // Function to display the game result
    function displayResult(result) {
        // Display the result in the resultElement
        resultElement.innerText = result;

        // Apply win-animation class for a visual effect
        if (result === "win") {
            resultElement.classList.add("win-animation");
        } else {
            resultElement.classList.remove("win-animation");
        }
    }

    // Function to update the score
    function updateScore(result) {
        // Update the score based on the result
        if (result === "win") {
            // Increment player's score
            playerPointsElement.innerText = parseInt(playerPointsElement.innerText) + 1;
        } else if (result === "lose") {
            // Increment computer's score
            computerPointsElement.innerText = parseInt(computerPointsElement.innerText) + 1;
        }
        // If it's a tie, do nothing with the score
    }

    // Function to show the play-again button
    function showPlayAgainButton() {
        playAgainButton.style.display = "block";
    }

    // Function to reset the game for a new round
    function resetGame() {
        // Reset result text and remove win-animation class
        resultElement.innerText = "";
        resultElement.classList.remove("win-animation");

        // Hide play-again button
        playAgainButton.style.display = "none";

        // Reset player and computer choices to default
        document.querySelector(".player .play-btn img").src = "img/icon-scissors.svg";
        document.querySelector(".computer .play-btn img").src = "img/icon-lizard.svg";
    }

    // Event listener for the rules button
    document.getElementById("rules").addEventListener("click", showRules);

    // Event listener for closing the rules view
    document.getElementById("close").addEventListener("click", hideRules);

    // Event listener for play-again button
    playAgainButton.addEventListener("click", function () {
        // Reset the game for a new round
        resetGame();
    });

    // Event listener for player's choice buttons
    document.querySelectorAll(".play-btn").forEach(function (button) {
        button.addEventListener("click", function () {
            // Get the ID of the clicked button (e.g., "scissors", "rock", "paper", etc.)
            var userChoice = this.id;

            // Implement computer's choice logic (random in this case)
            var choices = ["scissors", "rock", "paper", "lizard", "spock"];
            var computerChoice = choices[Math.floor(Math.random() * choices.length)];

            // Handle the game result
            handleGameResult(userChoice, computerChoice);
        });
    });
    
    // Remove the loading screen after everything is set up
    setTimeout(function () {
        loadingScreen.style.opacity = "0";
        loadingScreen.style.display = "none";
    }, 5000);
});
