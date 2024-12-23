// function scrollToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//     }
// }
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    const subject = encodeURIComponent('Сообщение от ' + name);
    const body = encodeURIComponent('Имя: ' + name + '\nПочта: ' + email + '\nСообщение: ' + message);
    
    const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
}
