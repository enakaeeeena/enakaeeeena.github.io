function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Здесь вы можете использовать API для отправки email
        // Например, используя fetch для отправки данных на сервер

        fetch('https://api.mail.ru/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: 'enakaena@mail.ru',
                subject: 'Новое сообщение от ' + name,
                text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`
            })
        })
        .then(response => {
            if (response.ok) {
                alert('Сообщение отправлено!');
                document.getElementById('feedback-form').reset(); // Сброс формы
            } else {
                alert('Ошибка при отправке сообщения.');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Ошибка при отправке сообщения.');
        });
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
}
