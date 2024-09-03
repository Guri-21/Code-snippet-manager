document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscription-form');
    const emailInput = document.getElementById('email');
    const submitButton = document.getElementById('submit-btn');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = emailInput.value;

        // Disable the submit button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Subscribing...';

        // Simulate an API call
        setTimeout(function() {
            // Enable the submit button and reset text
            submitButton.disabled = false;
            submitButton.textContent = 'Subscribe';

            // Show success message (in a real scenario, this would depend on the API response)
            messageDiv.textContent = 'Thank you for subscribing!';
            messageDiv.className = 'message success';

            // Clear the form
            emailInput.value = '';

            // Clear the message after 5 seconds
            setTimeout(function() {
                messageDiv.textContent = '';
                messageDiv.className = 'message';
            }, 5000);
        }, 1500); // Simulate a 1.5 second delay
    });
});