// Play background music on load
window.onload = function () {
    const audio = document.getElementById("birthdaySong");
    audio.play();
};

// Function to scroll to specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}
