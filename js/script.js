const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let yesCount = 0; // Initialize a counter for yes button clicks
let noCount = 0;
const MAX_IMAGES = 5; // Assuming you have 5 images

yesBtn.addEventListener("click", () => {
    window.location.href = "Gift.html"; // Replace with your desired URL
});

noBtn.addEventListener("mouseover", function () {
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    // Set new position for the button
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Update content
    question.innerHTML = " Are you sure? ";
    gif.src = "https://media.tenor.com/DvWwqDSpr3MAAAAi/mochi-peach.gif";
    noCount++;
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
        // If you want to stop showing new images after MAX_IMAGES
        // play = false;
    }
});

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6 * yesCount; // Increase font size by yesCount

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "No",
        "please?",
        "whyy?",
        ":[",
    ];

    // Calculate the index considering the length of the messages array
    const messageIndex = noCount % messages.length;
    return messages[messageIndex];
}

function updateNoButtonText() {
    noBtn.innerHTML = generateMessage(noCount);
}