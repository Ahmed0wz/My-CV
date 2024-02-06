document.addEventListener("DOMContentLoaded", function() {
    // Get the image element
    var animatedImage = document.getElementById("animatedImage");

    // Function to animate the image
    function animateImage() {
        animatedImage.style.left = "50px"; // Adjust the final position as needed
    }

    // Trigger the animation when the page loads
    animateImage();
});
