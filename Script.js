const loginButton = document.getElementById('login-btn');
const loadingAnimation = document.getElementById('loading-animation');
const form = document.getElementById('login-form');

loginButton.addEventListener('click', function() {
    // Disable form inputs and button during loading
    form.querySelectorAll('input').forEach(input => input.disabled = true);
    loginButton.disabled = true;
    
    // Show the loading animation
    loadingAnimation.style.display = 'flex';

    // Simulate a loading period of 5 seconds
    setTimeout(() => {
        // Hide the loading animation after 5 seconds
        loadingAnimation.style.display = 'none';
        
        // Re-enable form inputs and button after loading
        form.querySelectorAll('input').forEach(input => input.disabled = false);
        loginButton.disabled = false;

        // Simulate login success or further actions here
        alert('Login Successful!');
    }, 5000);  // Loading animation runs for 5 seconds
});