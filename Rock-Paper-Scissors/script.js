// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(function () {
//         var loadingScreen = document.getElementById("loading-screen");
//         loadingScreen.style.opacity = "0";
//         loadingScreen.style.display = "none";
//     }, 5000);
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Function to hide the "view-play" initially
//     function hideViewPlay() {
//         document.querySelector(".view-play").style.display = "none";
//     }

//     // Function to show the rules
//     function showRules() {
//         document.querySelector(".view-rules").style.display = "flex";
//     }

//     // Function to hide the rules
//     function hideRules() {
//         document.querySelector(".view-rules").style.display = "none";
//     }

//     // Function to handle player's choice
//     function playerChoice(choice) {
//         document.getElementById("player").innerHTML = `<img src="img/icon-${choice}.svg" alt="${choice}">`;
//         return choice;
//     }

//     // Function to generate a random computer choice
//     function generateComputerChoice() {
//         const choices = ["rock", "paper", "scissors", "lizard", "spock"];
//         const randomIndex = Math.floor(Math.random() * choices.length);
//         const computerChoice = choices[randomIndex];
//         document.getElementById("computer").innerHTML = `<img src="img/icon-${computerChoice}.svg" alt="${computerChoice}">`;
//         return computerChoice;
//     }

//     // Function to determine the winner and update scores
//     function determineWinner(playerChoice, computerChoice) {
//         // Implement your game logic here and update scores accordingly
//         // For simplicity, let's assume the player always wins
//         updateScores(true);
//     }

//     // Function to update scores
//     function updateScores(playerWins) {
//         const playerPointsElement = document.getElementById("player-points");
//         const computerPointsElement = document.getElementById("computer-points");

//         let playerPoints = parseInt(playerPointsElement.textContent);
//         let computerPoints = parseInt(computerPointsElement.textContent);

//         if (playerWins) {
//             playerPoints++;
//         } else {
//             computerPoints++;
//         }

//         playerPointsElement.textContent = playerPoints;
//         computerPointsElement.textContent = computerPoints;

//         // Display result in view-result element
//         const resultElement = document.getElementById("view-result");
//         resultElement.querySelector("span").textContent = playerWins ? "You Win!" : "You Lose!";
//         resultElement.style.display = "flex";
//     }

//     // Function to reset the game state
//     function resetGame() {
//         document.getElementById("player").innerHTML = "";
//         document.getElementById("computer").innerHTML = "";
//         document.getElementById("view-result").style.display = "none";
//     }

//     // Event listeners for button clicks
//     document.getElementById("rules").addEventListener("click", showRules);
//     document.getElementById("close").addEventListener("click", hideRules);
//     document.getElementById("mobile-close").addEventListener("click", hideRules);

//     // Event listener for play-again button
//     document.getElementById("playagin").addEventListener("click", function () {
//         hideRules();
//         resetGame();
//         hideViewPlay();
//     });

//     // Event listeners for player's choice buttons
//     const playButtons = document.querySelectorAll(".play-btn");
//     playButtons.forEach(function (button) {
//         button.addEventListener("click", function () {
//             const playerChoiceValue = playerChoice(button.id);
//             const computerChoiceValue = generateComputerChoice();
//             determineWinner(playerChoiceValue, computerChoiceValue);
//             document.querySelector(".view-play").style.display = "flex";
//         });
//     });

//     // Initial setup
//     hideViewPlay();
//     setTimeout(() => {
//         document.getElementById("loading-screen").style.display = "none";
//         showRules();
//     }, 4000);
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // Step 1: Hide view-play and show loading screen
//     document.querySelector(".view-play").style.display = "none";
//     setTimeout(function () {
//         document.querySelector("#loading-screen").style.display = "none";
//         document.querySelector(".view-rules").style.display = "flex";
//     }, 4000);

//     // Step 1.1: Add event listeners for rule close buttons
//     document.getElementById("close").addEventListener("click", toggleRules);
//     document.getElementById("mobile-close").addEventListener("click", toggleRules);

//     // Step 2: Add event listeners for play buttons
//     const playButtons = document.querySelectorAll(".play-btn");
//     playButtons.forEach(function (button) {
//         button.addEventListener("click", playGame);
//     });

//     // Step 3: Add event listener for play-again button
//     document.getElementById("playagin").addEventListener("click", playAgain);

//     function toggleRules() {
//         document.querySelector(".view-rules").classList.toggle("active");
//     }

//     function playGame(event) {
//         // Step 2: Show view-play
//         document.querySelector(".view-play").style.display = "flex";

//         // Step 2.1: Hide rules
//         document.querySelector(".view-rules").style.display = "none";

//         // Step 2.2: Get user's choice
//         const playerChoice = event.currentTarget.id;

//         // Step 2.3: Get computer's choice
//         const computerChoice = generateComputerChoice();

//         // Step 2.4: Display player and computer choices
//         displayChoices(playerChoice, computerChoice);

//         // Step 3: Determine the winner and update scores
//         const result = determineWinner(playerChoice, computerChoice);
//         updateScores(result);

//         // Step 3.1: Show result and play-again button
//         document.getElementById("view-result").style.display = "flex";
//         document.getElementById("result").innerText = result;

//         // Step 3.2: Highlight the winner
//         if (result === "You Win!") {
//             document.getElementById("player").classList.add("win-animation");
//         } else if (result === "You Lose!") {
//             document.getElementById("computer").classList.add("win-animation");
//         }
//     }

//     function generateComputerChoice() {
//         const choices = ["rock", "paper", "scissors", "lizard", "spock"];
//         const randomIndex = Math.floor(Math.random() * choices.length);
//         return choices[randomIndex];
//     }

//     function displayChoices(playerChoice, computerChoice) {
//         // Display player choice
//         const playerDiv = document.getElementById("player");
//         playerDiv.innerHTML = `<button class="play-btn ${playerChoice}"><img src="img/icon-${playerChoice}.svg" alt="${playerChoice}"></button>`;

//         // Display computer choice
//         const computerDiv = document.getElementById("computer");
//         computerDiv.innerHTML = `<button class="play-btn ${computerChoice}"><img src="img/icon-${computerChoice}.svg" alt="${computerChoice}"></button>`;
//     }

//     function determineWinner(playerChoice, computerChoice) {
//         // Your logic to determine the winner
//         // Update this section based on the game rules for each combination
//         // Return "You Win!", "You Lose!", or "It's a Draw!"
//         // Example logic for Rock, Paper, Scissors, Lizard, Spock:
//         if (
//             (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
//             (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
//             (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
//             (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
//             (playerChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))
//         ) {
//             return "You Win!";
//         } else if (playerChoice === computerChoice) {
//             return "It's a Draw!";
//         } else {
//             return "You Lose!";
//         }
//     }

//     function updateScores(result) {
//         // Update scores based on the result
//         const playerPoints = document.getElementById("player-points");
//         const computerPoints = document.getElementById("computer-points");

//         if (result === "You Win!") {
//             playerPoints.innerText = parseInt(playerPoints.innerText) + 1;
//         } else if (result === "You Lose!") {
//             computerPoints.innerText = parseInt(computerPoints.innerText) + 1;
//         }
//     }

//     function playAgain() {
//         // Step 4: Reset the game
//         document.querySelector(".view-play").style.display = "none";
//         document.getElementById("view-result").style.display = "none";
//         document.getElementById("player").innerHTML = "";
//         document.getElementById("computer").innerHTML = "";
//         document.getElementById("player").classList.remove("win-animation");
//         document.getElementById("computer").classList.remove("win-animation");
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Hide view-play and show loading screen
    document.querySelector(".view-play").style.display = "none";
    setTimeout(function () {
        document.querySelector("#loading-screen").style.display = "none";
        document.querySelector(".view-rules").style.display = "flex";
    }, 4000);

    // Step 1.1: Add event listeners for rule close buttons
    document.getElementById("close").addEventListener("click", toggleRules);
    document.getElementById("mobile-close").addEventListener("click", toggleRules);

    // Step 2: Add event listeners for play buttons
    const playButtons = document.querySelectorAll(".play-btn");
    playButtons.forEach(function (button) {
        button.addEventListener("click", playGame);
    });

    // Step 3: Add event listener for play-again button
    document.getElementById("playagin").addEventListener("click", playAgain);

    function toggleRules() {
        document.querySelector(".view-rules").classList.toggle("active");
    }

    function playGame(event) {
        // Step 2: Show view-play
        document.querySelector(".view-play").style.display = "flex";

        // Step 2.1: Hide rules
        document.querySelector(".view-rules").style.display = "none";

        // Step 2.2: Get user's choice
        const playerChoice = event.currentTarget.id;

        // Step 2.3: Get computer's choice
        const computerChoice = generateComputerChoice();

        // Step 2.4: Display player and computer choices
        displayChoices(playerChoice, computerChoice);

        // Step 3: Determine the winner and update scores
        const result = determineWinner(playerChoice, computerChoice);
        updateScores(result);

        // Step 3.1: Show result and play-again button
        document.getElementById("view-result").style.display = "flex";
        document.getElementById("result").innerText = result;

        // Step 3.2: Highlight the winner
        if (result === "You Win!") {
            document.getElementById("player").classList.add("win-animation");
            setTimeout(() => clearHighlights(), 2000);
        } else if (result === "You Lose!") {
            document.getElementById("computer").classList.add("win-animation");
            setTimeout(() => clearHighlights(), 2000);
        } else {
            setTimeout(() => clearHighlights(), 2000);
        }
    }

    function generateComputerChoice() {
        const choices = ["rock", "paper", "scissors", "lizard", "spock"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function displayChoices(playerChoice, computerChoice) {
        // Clear previous highlights
        clearHighlights();

        // Display player choice
        const playerDiv = document.getElementById("player");
        playerDiv.innerHTML = `<button class="play-btn ${playerChoice}"><img src="img/icon-${playerChoice}.svg" alt="${playerChoice}"></button>`;

        // Display computer choice
        const computerDiv = document.getElementById("computer");
        computerDiv.innerHTML = `<button class="play-btn ${computerChoice}"><img src="img/icon-${computerChoice}.svg" alt="${computerChoice}"></button>`;
    }

    function clearHighlights() {
        document.getElementById("player").classList.remove("win-animation");
        document.getElementById("computer").classList.remove("win-animation");
    }

    function determineWinner(playerChoice, computerChoice) {
        // Update this section based on the game rules for each combination
        // Return "You Win!", "You Lose!", or "It's a Draw!"
        // Example logic for Rock, Paper, Scissors, Lizard, Spock:
        if (
            (playerChoice === "rock" && (computerChoice === "scissors" || computerChoice === "lizard")) ||
            (playerChoice === "paper" && (computerChoice === "rock" || computerChoice === "spock")) ||
            (playerChoice === "scissors" && (computerChoice === "paper" || computerChoice === "lizard")) ||
            (playerChoice === "lizard" && (computerChoice === "spock" || computerChoice === "paper")) ||
            (playerChoice === "spock" && (computerChoice === "scissors" || computerChoice === "rock"))
        ) {
            return "You Win!";
        } else if (playerChoice === computerChoice) {
            return "It's a Draw!";
        } else {
            return "You Lose!";
        }
    }

    function updateScores(result) {
        // Update scores based on the result
        const playerPoints = document.getElementById("player-points");
        const computerPoints = document.getElementById("computer-points");

        if (result === "You Win!") {
            playerPoints.innerText = parseInt(playerPoints.innerText) + 1;
        } else if (result === "You Lose!") {
            computerPoints.innerText = parseInt(computerPoints.innerText) + 1;
        }
    }

    function playAgain() {
        // Step 4: Reset the game to play again
        document.querySelector(".view-play").style.display = "none";
        document.getElementById("view-result").style.display = "none";

        // Clear previous choices
        document.getElementById("player").innerHTML = "";
        document.getElementById("computer").innerHTML = "";
    }
});

