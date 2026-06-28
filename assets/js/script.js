// ===============================
// Terminal Typing Animation
// ===============================

// ===============================
// Terminal Typing Animation
// ===============================

const terminalOutput = document.getElementById("terminal-output");

const terminalCommands = [
    [
        "user@jcovi:~$ whoami",
        "Josh Covington",
        "Full-stack developer | Security+ | CS student"
    ],
    [
        "user@jcovi:~$ ls projects",
        "Portfolio Website",
        "Recipe Finder",
        "Employee Tracker",
        "Library Search"
    ],
    [
        "user@jcovi:~$ status",
        "Building jcovi.com",
        "Learning cybersecurity, networking, and cloud"
    ],
    [
        "user@jcovi:~$ roadmap",
        "Software Development",
        "Cybersecurity",
        "Networking",
        "Cloud Engineering"
    ]
];

let commandIndex = 0;
let lineIndex = 0;
let charIndex = 0;

function clearTerminal() {
    terminalOutput.innerHTML = "";
    lineIndex = 0;
    charIndex = 0;
}

function typeTerminal() {
    const currentCommand = terminalCommands[commandIndex];

    if (lineIndex < currentCommand.length) {
        const currentLine = currentCommand[lineIndex];

        if (charIndex < currentLine.length) {
            terminalOutput.innerHTML += currentLine.charAt(charIndex);
            charIndex++;
            setTimeout(typeTerminal, 35);
        } else {
            terminalOutput.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeTerminal, 400);
        }
    } else {
        terminalOutput.innerHTML += '<span class="cursor">_</span>';

        setTimeout(() => {
            commandIndex = (commandIndex + 1) % terminalCommands.length;
            clearTerminal();
            typeTerminal();
        }, 2500);
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