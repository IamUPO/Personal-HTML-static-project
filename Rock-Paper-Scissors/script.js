document.addEventListener("DOMContentLoaded", function () {
    // Initialize variables
    const viewPlay = document.querySelector(".view-play");
    const loadingScreen = document.querySelector("#loading-screen");
    const viewRules = document.querySelector(".view-rules");
    const closeRuleButton = document.getElementById("close");
    const mobileCloseButton = document.getElementById("mobile-close");
    const rulesButton = document.getElementById("rules");
    const playButtons = document.querySelectorAll(".play-btn");
    const viewResult = document.getElementById("view-result");
    const resultText = document.getElementById("result");
    const playerPoints = document.getElementById("player-points");
    const computerPoints = document.getElementById("computer-points");
    const playAgainButton = document.getElementById("playagin");

    // Step 1: Hide view-play and show loading screen
    viewPlay.style.display = "none";
    setTimeout(function () {
        loadingScreen.style.opacity = "0";
        setTimeout(function () {
            loadingScreen.style.display = "none";
            viewRules.style.display = "flex";
        }, 500); // Adjust the timing based on your preference
    }, 4000);

    // Step 1.1: Add event listeners for rule close buttons
    closeRuleButton.addEventListener("click", toggleRules);
    mobileCloseButton.addEventListener("click", toggleRules);

    // Step 1.2: Add event listener for rules button
    rulesButton.addEventListener("click", showRules);

    // Step 2: Add event listeners for play buttons
    playButtons.forEach(function (button) {
        button.addEventListener("click", playGame);
    });

    // Step 3: Add event listener for play-again button
    playAgainButton.addEventListener("click", playAgain);

    // Function to toggle rules visibility
    function toggleRules() {
        // Hide rules by setting display to "none"
        viewRules.style.display = "none";
    }

    // Function to show rules when rules button is clicked
    function showRules() {
        // Show rules by setting display to "flex"
        viewRules.style.display = "flex";
    }


    // Function to handle gameplay when a play button is clicked
    function playGame(event) {
        // Step 2: Show view-play
        viewPlay.style.display = "flex";

        // Step 2.1: Hide rules
        viewRules.style.display = "none";

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
        viewResult.style.display = "flex";
        resultText.innerText = result;

        // Step 3.2: Highlight the winner
        if (result === "You Win!") {
            playerPoints.innerText = parseInt(playerPoints.innerText) + 1;
            document.getElementById("player").classList.add("win-animation");
        } else if (result === "You Lose!") {
            computerPoints.innerText = parseInt(computerPoints.innerText) + 1;
            document.getElementById("computer").classList.add("win-animation");
        }

        // Clear highlights after some time
        setTimeout(clearHighlights, 2000);
    }

    // Function to generate a random choice for the computer
    function generateComputerChoice() {
        const choices = ["rock", "paper", "scissors", "lizard", "spock"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to display player and computer choices
    function displayChoices(playerChoice, computerChoice) {
        // Display player choice
        document.getElementById("player").innerHTML = `<button class="play-btn ${playerChoice}"><img src="img/icon-${playerChoice}.svg" alt="${playerChoice}"></button>`;

        // Display computer choice
        document.getElementById("computer").innerHTML = `<button class="play-btn ${computerChoice}"><img src="img/icon-${computerChoice}.svg" alt="${computerChoice}"></button>`;
    }

    // Function to clear win highlights
    function clearHighlights() {
        document.getElementById("player").classList.remove("win-animation");
        document.getElementById("computer").classList.remove("win-animation");
    }

    // Function to determine the winner
    function determineWinner(playerChoice, computerChoice) {
        // Define game rules and return result
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

    // Function to update scores
    function updateScores(result) {
        // Update scores based on the result
        if (result === "You Win!") {
            playerPoints.innerText = parseInt(playerPoints.innerText) + 1;
        } else if (result === "You Lose!") {
            computerPoints.innerText = parseInt(computerPoints.innerText) + 1;
        }
    }

    // Function to reset the game
    function playAgain() {
        // Hide play view and result view
        viewPlay.style.display = "none";
        viewResult.style.display = "none";
    }
});
