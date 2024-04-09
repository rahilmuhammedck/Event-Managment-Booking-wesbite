document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Retrieve email and password from the form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Retrieve stored credentials from local storage
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        // Check if the entered credentials match the stored credentials
        if (email === storedEmail && password === storedPassword) {
            // Redirect to the welcome page
            window.location.href = 'create_booking.html';
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});