document.addEventListener("DOMContentLoaded", function() {
    const eventTypes = document.querySelectorAll('.event-type');
    const proceedBtn = document.getElementById('proceedBtn');

    eventTypes.forEach(function(eventType) {
        eventType.addEventListener('click', function() {
            // Retrieve event type from data attribute
            const type = this.getAttribute('data-type');
            console.log('Selected event type:', type);
        });
    });

    proceedBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
