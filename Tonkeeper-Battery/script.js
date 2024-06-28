// Navigation Menu and Language Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navMenuButton = document.querySelector('button[name="navigation-menu-btn"]');
    const navMenu = document.getElementById('navigation-menu');
    const languageButton = document.querySelector('button[name="language-btn"]');
    const languageMenu = document.getElementById('language-menu');

    navMenuButton.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
    });

    languageButton.addEventListener('click', () => {
        languageMenu.classList.toggle('hidden');
    });

    // Optional: Close menus when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenuButton.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.add('hidden');
        }
        if (!languageButton.contains(event.target) && !languageMenu.contains(event.target)) {
            languageMenu.classList.add('hidden');
        }
    });
});

// Tab Change Functionality
function changeActiveTab(event, tabID) {
    let tabs = document.querySelectorAll('.tab-content > div');
    tabs.forEach(tab => {
        tab.classList.add('hidden');
    });

    let activeTab = document.getElementById(tabID);
    if (activeTab) {
        activeTab.classList.remove('hidden');
        activeTab.classList.add('flex');
    }
}

// Keyboard Event Listener for Arrow Keys
document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('keydown', function(event) {
        if (event.key === "ArrowLeft") {
            scrollLeft();
        } else if (event.key === "ArrowRight") {
            scrollRight();
        }
    });
});

// Custom Scroll Functions
function customScrollLeft() {
    const container = document.getElementById('scroll-container');
    container.scrollBy({ left: -500, behavior: 'smooth' });
}

function customScrollRight() {
    const container = document.getElementById('scroll-container');
    container.scrollBy({ left: 500, behavior: 'smooth' });
}

// Page Load and Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    // Trigger page load animations
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-down, .fade-in-up').forEach(el => {
        el.classList.add('opacity-100');
    });

    // Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('.fade-in-scroll, .fade-in-left-scroll, .fade-in-right-scroll, .fade-in-down-scroll, .fade-in-up-scroll').forEach(el => {
        observer.observe(el);
    });
});
