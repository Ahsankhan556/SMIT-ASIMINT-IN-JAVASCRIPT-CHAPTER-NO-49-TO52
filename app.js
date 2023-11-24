function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('All fields must be filled out');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    alert('Sign Up successful!');
    
    // Prevent the form from submitting
    return false;
}






function toggleDetails() {
    var fullDetails = document.querySelector('.full-details');
    fullDetails.style.display = (fullDetails.style.display === 'none' || fullDetails.style.display === '') ? 'block' : 'none';
}

       
