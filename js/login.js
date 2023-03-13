// Get the login form element and add a submit event listener
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally
  
  // Get the user's email and password
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  
  // Set the request URL and method
  xhr.open('POST', 'php/login.php');
  
  // Set the request headers
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
  // Set the request data
  const data = `email=${email}&password=${password}`;
  
  // Set the callback function for when the request is complete
  xhr.onload = () => {
    if (xhr.status === 200) {
      // If the request was successful, redirect to the profile page
      window.location.href = 'profile.html';
    } else {
      // If the request was not successful, display an error message
      const errorMessage = document.querySelector('#error-message');
      errorMessage.textContent = 'Incorrect email or password';
    }
  };
  
  // Send the request
  xhr.send(data);
});
