document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('form');

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const password = document.querySelector('input[name="password"]').value;

        // Store credentials in local storage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        // Redirect to login page
        window.location.href = 'loginform.html';
    });
});