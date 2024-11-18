// Function to prompt the user to play music
window.onload = function() {
    const audio = document.getElementById("birthdaySong");
    const playButton = document.getElementById("playMusicButton");

    // Ask the user if they want to play music
    const userResponse = confirm("Would you like to play the birthday music?");
    
    if (userResponse) {
        audio.play().catch(() => {
            // If auto-play fails due to browser restrictions, show the play button
            playButton.style.display = "block";
        });
    } else {
        // Display the play button if they want to play later
        playButton.style.display = "block";
    }
}

// Play the background music when the button is clicked
function playMusic() {
    const audio = document.getElementById("birthdaySong");
    const playButton = document.getElementById("playMusicButton");
    
    audio.play();
    playButton.style.display = "none"; // Hide the play button after clicking
}
