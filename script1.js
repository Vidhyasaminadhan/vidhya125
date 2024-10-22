const registrationForm = document.getElementById('registration-form');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.getElementById('error-message');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Basic validation
  if (!validateForm()) {
    errorMessage.textContent = 'Please fill in all required fields';
  } else {
    // Submit form data to server using AJAX or fetch API
    // For demonstration purposes, assume successful registration
    alert('Registration successful!');
    registrationForm.reset();
  }
});

function validateForm() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const phone = document.getElementById