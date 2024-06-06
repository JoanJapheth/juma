document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    var welcomeHeading = document.querySelector(".welcome-message h1");
    var welcomeParagraph = document.querySelector(".welcome-message p");

    // Define the welcome message
    var welcomeMessage = "E-BYTE CAFE!!";
    var additionalMessage = "We are delighted to have you. This is where we serve elegant meals that leave our customers with a watery mouth.";

    // Set the content of the elements
    welcomeHeading.textContent = welcomeMessage;
    welcomeParagraph.textContent = additionalMessage;
});
