document.addEventListener('DOMContentLoaded', function () {
    const createBookingForm = document.getElementById('createBookingForm');

    createBookingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            eventType: document.getElementById('eventType').value
        };

        // Store form data in local storage
        localStorage.setItem('bookingData', JSON.stringify(formData));

        // Redirect to the invoice page
        window.location.href = 'invoice.html';

        // Store form data in shared storage accessible to admin page
        sessionStorage.setItem('adminBookingData', JSON.stringify(formData));
    });
});
