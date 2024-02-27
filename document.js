document.addEventListener('DOMContentLoaded', function() {
    const clickMeButton = document.getElementById('clickMeButton');
    const buttonResult = document.getElementById('buttonResult');
    const welcomeMessage = document.getElementById('welcome-message');

    let textVisible = true;

    clickMeButton.addEventListener('click', function() {
        playAudio();

        if (textVisible) {
            buttonResult.textContent = 'click button';
            // Hide the main content text
            welcomeMessage.style.opacity = '0';
        } else {
            buttonResult.textContent = 'Button clicked! Nothing happened!';
            // Show the main content text
            welcomeMessage.style.opacity = '1';
        }

        textVisible = !textVisible;
    });

    function playAudio() {

    }
});
