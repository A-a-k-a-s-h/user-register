$(document).ready(function() {
  $('#register-form').submit(function(event) {
    // Prevent the form from submitting via the browser
    event.preventDefault();

    // Get the form data
    var formData = {
      'username': $('input[name=username]').val(),
      'email': $('input[name=email]').val(),
      'password': $('input[name=password]').val(),
      'confirm_password': $('input[name=confirm_password]').val(),
      'age': $('input[name=age]').val(),
      'dob': $('input[name=dob]').val(),
      'contact': $('input[name=contact]').val()
    };

    // Send the form data to the server via AJAX
    $.ajax({
      type: 'POST',
      url: 'php/register.php',
      data: formData,
      dataType: 'json',
      encode: true
    })
    .done(function(data) {
      // Handle the response from the server
      if (!data.success) {
        if (data.errors.username) {
          // Display an error message for the username field
          $('#error-username').html(data.errors.username);
        } else {
          $('#error-username').html('');
        }
        if (data.errors.email) {
          // Display an error message for the email field
          $('#error-email').html(data.errors.email);
        } else {
          $('#error-email').html('');
        }
        if (data.errors.password) {
          // Display an error message for the password field
          $('#error-password').html(data.errors.password);
        } else {
          $('#error-password').html('');
        }
        if (data.errors.confirm_password) {
          // Display an error message for the confirm password field
          $('#error-confirm-password').html(data.errors.confirm_password);
        } else {
          $('#error-confirm-password').html('');
        }
        if (data.errors.age) {
          // Display an error message for the age field
          $('#error-age').html(data.errors.age);
        } else {
          $('#error-age').html('');
        }
        if (data.errors.dob) {
          // Display an error message for the dob field
          $('#error-dob').html(data.errors.dob);
        } else {
          $('#error-dob').html('');
        }
        if (data.errors.contact) {
          // Display an error message for the contact field
          $('#error-contact').html(data.errors.contact);
        } else {
          $('#error-contact').html('');
        }
      } else {
        // Redirect the user to the profile page on successful registration
        window.location.href = 'php/profile.php';
      }
    });
  });
});
