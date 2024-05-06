// JavaScript for mode toggling
document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    modeToggle.addEventListener('click', function() {
        // Toggle dark mode class on body
        body.classList.toggle('dark-mode');

        // Toggle moon/sun icon class
        modeToggle.classList.toggle('moon');
        modeToggle.classList.toggle('sun');
    });
});
