const terminalOutput = document.getElementById("terminal-output");

const terminalLines = [
    "user@jcovi-portfolio:~$ whoami",
    "Josh Covington",
    "Developer. Problem Solver. Security Minded.",
    "",
    "user@jcovi-portfolio:~$ status",
    "Security+ Certified",
    "Active Secret Clearance",
    "Computer Science Student",
    "",
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