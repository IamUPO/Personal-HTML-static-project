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
