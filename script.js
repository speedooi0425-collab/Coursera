// Interactivity (5pts): Toggle visibility of contact info
document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const emailDisplay = document.getElementById('emailDisplay');

    contactBtn.addEventListener('click', () => {
        if (emailDisplay.style.display === 'none') {
            emailDisplay.style.display = 'block';
            contactBtn.textContent = 'Hide Email';
        } else {
            emailDisplay.style.display = 'none';
            contactBtn.textContent = 'Show Email';
        }
    });
});
