document.addEventListener('DOMContentLoaded', function () {
    // Retrieve booking data from sessionStorage
    const bookingData = JSON.parse(sessionStorage.getItem('adminBookingData'));

    // Check if booking data exists
    if (bookingData) {
        // Display booking details on the admin page
        document.getElementById('name').textContent = bookingData.name;
        document.getElementById('email').textContent = bookingData.email;
        document.getElementById('phone').textContent = bookingData.phone;
        document.getElementById('address').textContent = bookingData.address;
        document.getElementById('eventType').textContent = bookingData.eventType;
    } else {
        // Display a message if no booking data found
        document.getElementById('bookingDetails').textContent = 'No booking details available.';
    }
});
