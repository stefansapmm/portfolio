document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert(`Vielen Dank, ${name}! Ihre Nachricht wurde gesendet.`);
            form.reset();
        } else {
            alert('Bitte füllen Sie alle Felder aus.');
        }
    });
});
