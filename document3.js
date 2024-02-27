document.addEventListener('DOMContentLoaded', function() {
    const invertColorsButton = document.getElementById('invertColorsButton');
    const topBar = document.querySelector('.top-bar');
    const footer = document.querySelector('.footer');

    invertColorsButton.addEventListener('click', function() {
        invertColors();
    });

    function invertColors() {
        // Get the computed background color
        const topBarColor = window.getComputedStyle(topBar).backgroundColor;
        const footerColor = window.getComputedStyle(footer).backgroundColor;

        // Check if backgroundColor is set before inverting
        if (topBarColor) {
            topBar.style.backgroundColor = invertColor(topBarColor);
        }

        if (footerColor) {
            footer.style.backgroundColor = invertColor(footerColor);
        }
    }

    // Function to invert a color
    function invertColor(color) {
        // Convert color to RGB format
        const rgbArray = color.match(/\d+/g);

        // Invert each RGB component
        const invertedRgb = rgbArray.map(component => 255 - parseInt(component, 10));

        // Convert back to RGB format
        const invertedColor = `rgb(${invertedRgb.join(',')})`;

        return invertedColor;
    }

    function playAudio() {
        // Implement your audio logic here if needed
    }
});
