// ===============================
// Terminal Typing Animation
// ===============================

const terminalOutput = document.getElementById("terminal-output");

const terminalLines = [
    "user@jcovi-portfolio:~$ whoami",
    "Josh Covington",
    "Developer. Problem Solver. Security Minded.",
    "Security+ Certified",
    "Active Secret Clearance",
    "Computer Science Student",
    "user@jcovi-portfolio:~$ current_focus",
    "Building jcovi.com"
];

let lineIndex = 0;
let charIndex = 0;

function typeTerminal() {
    if (lineIndex < terminalLines.length) {
        const currentLine = terminalLines[lineIndex];

        if (charIndex < currentLine.length) {
            terminalOutput.innerHTML += currentLine.charAt(charIndex);
            charIndex++;
            setTimeout(typeTerminal, 35);
        } else {
            terminalOutput.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeTerminal, 350);
        }
    } else {
        terminalOutput.innerHTML += '<span class="cursor">_</span>';
    }
}

typeTerminal();


// ===============================
// Sidebar Navigation
// ===============================

const navButtons = document.querySelectorAll(".nav-link");
const toast = document.getElementById("toast");

navButtons.forEach(button => {

    button.addEventListener("click", () => {

        navButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const pageName = button.dataset.page;

        showToast(`🚧 ${pageName} page coming soon...`);

    });

});


// ===============================
// Toast Notification
// ===============================

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);

}

// ===============================
// Video Modal
// ===============================

const openVideo = document.getElementById("open-video");
const videoModal = document.getElementById("video-modal");
const closeVideo = document.getElementById("close-video");

openVideo.addEventListener("click", () => {
    videoModal.classList.add("show");
});

closeVideo.addEventListener("click", () => {
    videoModal.classList.remove("show");
});

videoModal.addEventListener("click", (event) => {
    if (event.target === videoModal) {
        videoModal.classList.remove("show");
    }
});