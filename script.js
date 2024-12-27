// Log a message when "Book Now" is clicked
document.addEventListener('DOMContentLoaded', () => {
    const bookButtons = document.querySelectorAll('button');
    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Your booking request has been received!');
        });
    });

    // Handle contact form submission
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the page from refreshing
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}! We will respond to your query at ${email}.`);
            contactForm.reset(); // Clear the form fields
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });
});
