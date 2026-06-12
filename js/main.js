const roles = [

    "Digital Marketing Specialist",
    "SEO Expert",
    "Frontend Developer",
    "WordPress Developer",
    "Video Editor"

];

const adminAccessBtn = document.getElementById('adminAccessBtn');
const adminPanel = document.getElementById('adminPanel');

if (adminPanel) {
    adminPanel.style.display = 'none';
}

function showAdminPanel() {
    const password = prompt('Enter admin password to manage your portfolio:');

    if (password === 'Ravi@2026') {
        adminPanel.style.display = 'block';
        adminPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
        alert('Admin access granted. You can now manage your portfolio content.');
    } else if (password) {
        alert('Incorrect password.');
    }
}

if (adminAccessBtn) {
    adminAccessBtn.addEventListener('click', showAdminPanel);
}

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeText() {

    if (charIndex < roles[roleIndex].length) {

        typing.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(eraseText, 1500);

    }
}

function eraseText() {

    if (charIndex > 0) {

        typing.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseText, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;
        }

        setTimeout(typeText, 500);
    }
}

typeText();