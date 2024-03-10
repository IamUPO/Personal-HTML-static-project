// Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", function () {
        // Set a timeout to hide the loading screen after 4 seconds (4000 milliseconds)
        setTimeout(function () {
            var loadingScreen = document.getElementById("loading-screen");
            loadingScreen.style.opacity = "0"; // Set opacity to 0 for a fade-out effect
        }, 5000);
    });