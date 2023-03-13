$(document).ready(function() {
  // get user details from server
  $.ajax({
    url: "get_profile.php",
    type: "POST",
    dataType: "json",
    success: function(data) {
      // populate profile fields
      $("#name").val(data.name);
      $("#email").val(data.email);
      $("#age").val(data.age);
      $("#dob").val(data.dob);
      $("#contact").val(data.contact);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    }
  });

  // update profile details
  $("#updateProfileBtn").click(function() {
    // get values from input fields
    var name = $("#name").val();
    var email = $("#email").val();
    var age = $("#age").val();
    var dob = $("#dob").val();
    var contact = $("#contact").val();

    // send updated details to server
    $.ajax({
      url: "update_profile.php",
      type: "POST",
      data: {
        name: name,
        email: email,
        age: age,
        dob: dob,
        contact: contact
      },
      dataType: "json",
      success: function(data) {
        alert(data.message);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  });
});
