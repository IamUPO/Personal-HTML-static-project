// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(function () {
//         var loadingScreen = document.getElementById("loading-screen");
//         loadingScreen.style.opacity = "0";
//         loadingScreen.style.display = "none";
//     }, 5000);
// });


document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Hide loading screen after 5 seconds
    setTimeout(function () {
        var loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.opacity = "0";
        loadingScreen.style.display = "none";

        // Step 2: Display rules after loading screen
        var viewRules = document.getElementById("view-rules");
        viewRules.style.display = "flex";

        // Add click event listener to rules button
        var rulesButton = document.getElementById("rules");
        rulesButton.addEventListener("click", function () {
            viewRules.style.display = "flex";
        });

        // Add click event listener to close button inside view-rules
        var closeButton = document.querySelector(".view-rules .close");
        closeButton.addEventListener("click", function () {
            viewRules.style.display = "none";
        });

        // Add click event listener to mobile close button inside view-rules
        var mobileCloseButton = document.getElementById("mobile-close");
        mobileCloseButton.addEventListener("click", function () {
            viewRules.style.display = "none";
        });
    }, 5000);

    // Step 3: Add click event listener to game-play buttons
    var playButtons = document.querySelectorAll(".play-btn");
    playButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Get the selected play button's ID
            var selectedPlay = button.id;

            // Step 4: Show view-play and update player and computer selections
            var viewPlay = document.querySelector(".view-play");
            var playerSelection = document.getElementById("player");
            var computerSelection = document.getElementById("computer");

            // Set the selections in view-play
            playerSelection.innerHTML = `<div class="play-btn ${selectedPlay}"></div>`;
            computerSelection.innerHTML = `<div class="play-btn"></div>`;

            // Step 5: Determine the result (win, lose, or tie)
            var result = determineResult(selectedPlay, computerPlay());

            // Update view-result text and add win-animation class if there's a winner
            var viewResult = document.getElementById("view-result");
            var resultText = document.getElementById("reult");
            var winner = updateScore(result);

            // Display result text and apply win-animation class if there's a winner
            resultText.innerText = result;
            if (winner) {
                viewResult.classList.add("win-animation");
            }

            // Display view-result
            viewResult.style.display = "flex";

            // Step 6: Add click event listener to play-again button
            var playAgainButton = document.getElementById("playagin");
            playAgainButton.addEventListener("click", function () {
                // Reset view-play and hide view-result
                viewPlay.style.display = "none";
                viewResult.style.display = "none";
                viewResult.classList.remove("win-animation");

                // Update player and computer selections to default
                playerSelection.innerHTML = `<div class="play-btn"></div>`;
                computerSelection.innerHTML = `<div class="play-btn"></div>`;
            });
        });
    });

    // Helper function to determine computer's play
    function computerPlay() {
        var plays = ["scissors", "paper", "rock", "lizard", "spock"];
        return plays[Math.floor(Math.random() * plays.length)];
    }

    // Helper function to determine the result and return a string
    function determineResult(player, computer) {
        // Logic to determine the result
        // You can customize this logic based on your game rules
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === "scissors" && (computer === "paper" || computer === "lizard")) ||
            (player === "paper" && (computer === "rock" || computer === "spock")) ||
            (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
            (player === "lizard" && (computer === "spock" || computer === "paper")) ||
            (player === "spock" && (computer === "scissors" || computer === "rock"))
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    // Helper function to update the score and return the winner
    function updateScore(result) {
        var playerPoints = document.getElementById("player-points");
        var computerPoints = document.getElementById("computer-points");

        // Logic to update the score based on the result
        // You can customize this logic based on your game rules
        if (result === "You win!") {
            playerPoints.innerText = parseInt(playerPoints.innerText) + 1;
            return "player";
        } else if (result === "You lose!") {
            computerPoints.innerText = parseInt(computerPoints.innerText) + 1;
            return "computer";
        } else {
            return null; // It's a tie, no winner
        }
    }
});
