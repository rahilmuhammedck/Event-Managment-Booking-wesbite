document.addEventListener('DOMContentLoaded', function() {
    const adminLoginForm = document.getElementById('adminLoginForm');

    adminLoginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the values from the form fields
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the username and password are correct (static credentials)
        if (username === 'durgadecor' && password === 'admin123') {
            // Redirect to the admin page
            window.location.href = 'admin.html'; // Replace 'admin_page.html' with the actual page URL
        } else {
            // Display an error message (you can customize this part)
            alert('Invalid username or password. Please try again.');
        }
    });
});
