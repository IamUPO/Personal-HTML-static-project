// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(function () {
//         var loadingScreen = document.getElementById("loading-screen");
//         loadingScreen.style.opacity = "0";
//         loadingScreen.style.display = "none";
//     }, 5000);
// });

document.addEventListener("DOMContentLoaded", function () {
    // Function to hide the loading screen after a delay
    setTimeout(function () {
        var loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.opacity = "0";
        loadingScreen.style.display = "none";

        // Display the rules immediately after the loading screen is hidden
        var viewRules = document.getElementById("view-rules");
        viewRules.style.display = "flex";
    }, 5000);

    // Event listener for the Rules button to toggle the rules view
    var rulesButton = document.getElementById("rules");
    rulesButton.addEventListener("click", function () {
        var viewRules = document.getElementById("view-rules");
        viewRules.style.display = "flex";
    });

    // Event listener for the close button in the rules view
    var closeButton = document.getElementById("close");
    closeButton.addEventListener("click", function () {
        var viewRules = document.getElementById("view-rules");
        viewRules.style.display = "none";
    });

    // Event listener for play buttons in the game-play section
    var playButtons = document.querySelectorAll(".play-btn");
    playButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Get the player's choice (assuming the button id represents the choice)
            var playerChoice = this.id;

            // Generate a random choice for the computer
            var computerChoices = ["scissors", "rock", "paper", "lizard", "spock"];
            var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            // Update the view-play elements with player and computer choices
            var playerElement = document.querySelector(".player .play-btn");
            var computerElement = document.querySelector(".computer .play-btn");
            playerElement.innerHTML = '<img src="img/icon-' + playerChoice + '.svg" alt="' + playerChoice + '">';
            computerElement.innerHTML = '<img src="img/icon-' + computerChoice + '.svg" alt="' + computerChoice + '">';

            // Show the game-play section
            var gamePlaySection = document.querySelector(".game-play");
            gamePlaySection.style.display = "flex";

            // Rest of the game logic remains the same...
            // (Determining the result, updating the score, showing the view-result element, etc.)

            // Show the view-result element
            var viewResult = document.querySelector(".view-result");
            viewResult.style.display = "flex";

            // Event listener for play-again button to reset the game
            var playAgainButton = document.getElementById("playagin");
            playAgainButton.addEventListener("click", function () {
                // Hide the view-result element
                viewResult.style.display = "none";

                // Reset the win-animation class
                winAnimationElement.classList.remove("win-animation");
            });
        });
    });
});
