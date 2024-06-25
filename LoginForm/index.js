document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.getElementById('navMenu');
    const navToggleButton = document.getElementById('navToggleButton');
    const userDropdownToggle = document.getElementById('userDropdownToggle');
    const userDropdown = document.getElementById('userDropdown');

    navToggleButton.addEventListener('click', function () {
        navMenu.classList.toggle('hidden');
    });

    userDropdownToggle.addEventListener('click', function () {
        userDropdown.classList.toggle('hidden');
    });

    // Close the dropdowns when clicking outside of them
    document.addEventListener('click', function (event) {
        if (!navToggleButton.contains(event.target)) {
            navMenu.classList.add('hidden');
        }
        if (!userDropdownToggle.contains(event.target)) {
            userDropdown.classList.add('hidden');
        }
    });
});