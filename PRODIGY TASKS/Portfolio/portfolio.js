document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name === '' || email === '' || message === '') {
        document.getElementById('formMessage').textContent = 'Please fill in all fields.';
        document.getElementById('formMessage').style.color = 'red';
        return;
    }

    // Simulate sending form (e.g., via API call)
    document.getElementById('formMessage').textContent = 'Thank you! Your message has been sent.';
    document.getElementById('formMessage').style.color = 'green';

    // Reset form fields
    document.getElementById('contactForm').reset();
});
