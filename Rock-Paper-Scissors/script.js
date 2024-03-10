// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(function () {
//         var loadingScreen = document.getElementById("loading-screen");
//         loadingScreen.style.opacity = "0";
//         loadingScreen.style.display = "none";
//     }, 5000);
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Declare bgPentagon variable globally
//     var bgPentagon = document.querySelector(".bg-pentagon");

//     // Set up event listener for the Rules button
//     var rulesButton = document.getElementById("rules");
//     var viewRules = document.querySelector(".view-rules");

//     // Show rules immediately after loading screen
//     setTimeout(function () {
//         var loadingScreen = document.getElementById("loading-screen");
//         loadingScreen.style.opacity = "0";
//         loadingScreen.style.display = "none";

//         // Display the rules
//         viewRules.style.display = "flex";
//     }, 5000);

//     // Event listener for opening and closing rules
//     rulesButton.addEventListener("click", function () {
//         viewRules.style.display = "flex";
//     });

//     var closeRulesButton = document.querySelector(".view-rules .close");

//     closeRulesButton.addEventListener("click", function () {
//         viewRules.style.display = "none";
//     });

//     // Set up event listener for play buttons
//     var playButtons = document.querySelectorAll(".play-btn");
//     var viewPlay = document.querySelector(".view-play");
//     var playerSelection = document.querySelector(".view-play .player .play-btn");
//     var computerSelection = document.querySelector(".view-play .computer .play-btn");
//     var viewResult = document.querySelector(".view-result");
//     var resultText = document.getElementById("reult");
//     var playAgainButton = document.getElementById("playagin");
//     var scorePoints = document.getElementById("score-points");

//     // Set initial score
//     var score = 0;

//     // Event listener for play buttons
//     playButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             // Hide the bg-pentagon
//             bgPentagon.style.display = "none";

//             // Show the view play section
//             viewPlay.style.display = "flex";

//             // Simulate computer selection (replace this with actual random logic)
//             var computerChoices = ["scissors", "rock", "paper", "lizard", "spock"];
//             var randomIndex = Math.floor(Math.random() * computerChoices.length);
//             var computerChoice = computerChoices[randomIndex];
//             computerSelection.className = "play-btn " + computerChoice;

//             // Determine winner
//             var userChoice = button.id;
//             playerSelection.className = "play-btn " + userChoice;
//             var winner = determineWinner(userChoice, computerChoice);

//             // Display result
//             viewResult.style.display = "flex";
//             resultText.textContent = winner;

//             // Update score and display
//             if (winner === "You Win!") {
//                 score++;
//             } else if (winner === "You Lose!") {
//                 score--;
//             }
//             scorePoints.textContent = score;

//             // Apply win animation to the winner
//             if (winner === "You Win!") {
//                 playerSelection.classList.add("win-animation");
//             } else if (winner === "You Lose!") {
//                 computerSelection.classList.add("win-animation");
//             }
//         });
//     });

//     // Event listener for play again button
//     playAgainButton.addEventListener("click", function () {
//         // Reset views for a new game
//         playerSelection.classList.remove("win-animation");
//         computerSelection.classList.remove("win-animation");
//         viewPlay.style.display = "none";
//         viewResult.style.display = "none";
//         // Access the bgPentagon variable here
//         bgPentagon.style.display = "block";
//     });

//     // Function to determine the winner
//     function determineWinner(player, computer) {
//         // Logic to determine winner, replace this with your game rules
//         // Example: Rock beats Scissors, Scissors beats Paper, etc.
//         if (player === computer) {
//             return "It's a Tie!";
//         } else if (
//             (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
//             (player === "paper" && (computer === "rock" || computer === "spock")) ||
//             (player === "scissors" && (computer === "paper" || computer === "lizard")) ||
//             (player === "lizard" && (computer === "spock" || computer === "paper")) ||
//             (player === "spock" && (computer === "scissors" || computer === "rock"))
//         ) {
//             return "You Win!";
//         } else {
//             return "You Lose!";
//         }
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Set up event listener for the Rules button
//     var rulesButton = document.getElementById("rules");
//     var viewRules = document.querySelector(".view-rules");

//     // Show rules immediately after loading screen
//     setTimeout(function () {
//         var loadingScreen = document.getElementById("loading-screen");
//         loadingScreen.style.opacity = "0";
//         loadingScreen.style.display = "none";

//         // Display the rules
//         viewRules.style.display = "flex";
//     }, 5000);

//     // Event listener for opening and closing rules
//     rulesButton.addEventListener("click", function () {
//         viewRules.style.display = "flex";
//     });

//     var closeRulesButton = document.querySelector(".view-rules .close");

//     closeRulesButton.addEventListener("click", function () {
//         viewRules.style.display = "none";
//     });

//     // Set up event listener for play buttons
//     var playButtons = document.querySelectorAll(".play-btn");
//     var viewPlay = document.querySelector(".view-play");
//     var playerSelection = document.querySelector(".view-play .player .play-btn");
//     var computerSelection = document.querySelector(".view-play .computer .play-btn");
//     var viewResult = document.querySelector(".view-result");
//     var resultText = document.getElementById("reult");
//     var playAgainButton = document.getElementById("playagin");
//     var scorePoints = document.getElementById("score-points");

//     // Set initial score
//     var score = 0;

//     // Event listener for play buttons
//     playButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             // Hide the bg-pentagon
//             var bgPentagon = document.querySelector(".bg-pentagon");
//             bgPentagon.style.display = "none";

//             // Show the view play section
//             viewPlay.style.display = "flex";

//             // Simulate computer selection (replace this with actual random logic)
//             var computerChoices = ["scissors", "rock", "paper", "lizard", "spock"];
//             var randomIndex = Math.floor(Math.random() * computerChoices.length);
//             var computerChoice = computerChoices[randomIndex];
//             computerSelection.className = "play-btn " + computerChoice;

//             // Determine winner
//             var userChoice = button.id;
//             playerSelection.className = "play-btn " + userChoice;
//             var winner = determineWinner(userChoice, computerChoice);

//             // Display result
//             viewResult.style.display = "flex";
//             resultText.textContent = winner;

//             // Update score and display
//             if (winner === "You Win!") {
//                 score++;
//             } else if (winner === "You Lose!") {
//                 score--;
//             }
//             scorePoints.textContent = score;

//             // Apply win animation to the winner
//             if (winner === "You Win!") {
//                 playerSelection.classList.add("win-animation");
//             } else if (winner === "You Lose!") {
//                 computerSelection.classList.add("win-animation");
//             }
//         });
//     });

//     // Event listener for play again button
//     playAgainButton.addEventListener("click", function () {
//         // Reset views for a new game
//         var bgPentagon = document.querySelector(".bg-pentagon");
//         bgPentagon.style.display = "block";

//         playerSelection.classList.remove("win-animation");
//         computerSelection.classList.remove("win-animation");
//         viewPlay.style.display = "none";
//         viewResult.style.display = "none";
//     });

//     // Function to determine the winner
//     function determineWinner(player, computer) {
//         // Logic to determine winner, replace this with your game rules
//         // Example: Rock beats Scissors, Scissors beats Paper, etc.
//         if (player === computer) {
//             return "It's a Tie!";
//         } else if (
//             (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
//             (player === "paper" && (computer === "rock" || computer === "spock")) ||
//             (player === "scissors" && (computer === "paper" || computer === "lizard")) ||
//             (player === "lizard" && (computer === "spock" || computer === "paper")) ||
//             (player === "spock" && (computer === "scissors" || computer === "rock"))
//         ) {
//             return "You Win!";
//         } else {
//             return "You Lose!";
//         }
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    // Function to hide loading screen after 5 seconds
    setTimeout(function () {
        var loadingScreen = document.getElementById("loading-screen");
        loadingScreen.style.opacity = "0";
        loadingScreen.style.display = "none";

        // Display the rules after the loading screen is done
        var viewRules = document.getElementById("view-rules");
        viewRules.style.display = "flex";
    }, 5000);

    // Rules Button
    var rulesButton = document.getElementById("rules");
    rulesButton.addEventListener("click", function () {
        var viewRules = document.getElementById("view-rules");
        viewRules.style.display = "flex";
    });

    // Close Button in Rules Section
    var closeButton = document.querySelectorAll(".close");
    closeButton.forEach(function (button) {
        button.addEventListener("click", function () {
            var viewRules = document.getElementById("view-rules");
            viewRules.style.display = "none";
        });
    });

    // Game Play Buttons
    var playButtons = document.querySelectorAll(".play-btn");
    playButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Get the user's selection
            var userSelection = button.id;

            // Simulate computer's random selection
            var computerSelections = ["rock", "paper", "scissors", "lizard", "spock"];
            var computerSelection = computerSelections[Math.floor(Math.random() * computerSelections.length)];

            // Display user and computer selections
            var viewPlay = document.querySelector(".view-play");
            var playerButton = viewPlay.querySelector(".player .play-btn");
            var computerButton = viewPlay.querySelector(".computer .play-btn");

            // Update button images based on selections
            playerButton.innerHTML = button.innerHTML;
            computerButton.innerHTML = document.getElementById(computerSelection).innerHTML;

            // Determine the result (win, lose, or tie)
            var result = determineResult(userSelection, computerSelection);

            // Display the result
            var resultElement = document.getElementById("result");
            resultElement.textContent = result;

            // Apply win-animation class if the user wins
            if (result === "You win!") {
                playerButton.classList.add("win-animation");
            } else {
                playerButton.classList.remove("win-animation");
            }

            // Update the score
            updateScore(result);

            // Display the view-play section
            viewPlay.style.display = "flex";
        });
    });

    // Play Again Button
    var playAgainButton = document.getElementById("play-again");
    playAgainButton.addEventListener("click", function () {
        // Hide the view-play section
        var viewPlay = document.querySelector(".view-play");
        viewPlay.style.display = "none";

        // Reset win-animation class
        var playerButton = viewPlay.querySelector(".player .play-btn");
        playerButton.classList.remove("win-animation");
    });

    // Function to determine the result of the game
    function determineResult(user, computer) {
        if (user === computer) {
            return "It's a tie!";
        } else if (
            (user === "rock" && (computer === "scissors" || computer === "lizard")) ||
            (user === "paper" && (computer === "rock" || computer === "spock")) ||
            (user === "scissors" && (computer === "paper" || computer === "lizard")) ||
            (user === "lizard" && (computer === "spock" || computer === "paper")) ||
            (user === "spock" && (computer === "scissors" || computer === "rock"))
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    // Function to update the score
    function updateScore(result) {
        var playerPoints = document.getElementById("player-points");
        var computerPoints = document.getElementById("computer-points");

        if (result === "You win!") {
            // Increment player's score
            playerPoints.textContent = parseInt(playerPoints.textContent) + 1;
        } else if (result === "You lose!") {
            // Increment computer's score
            computerPoints.textContent = parseInt(computerPoints.textContent) + 1;
        }
        // No score change for a tie
    }
});
