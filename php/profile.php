<?php
// Start the session
session_start();

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
  // Redirect to login page
  header('Location: php/login.php');
  exit;
}

// Connect to MongoDB server
$mongo = new MongoDB\Driver\Manager('mongodb+srv://aakashhari17:aakash@cluster0.5tkp5fv.mongodb.net/test');

// Prepare the query
$filter = ['_id' => new MongoDB\BSON\ObjectID($_SESSION['user_id'])];
$options = [];
$query = new MongoDB\Driver\Query($filter, $options);

// Execute the query
$rows = $mongo->executeQuery('my_database.user_profiles', $query);

// Get the user's profile data
$user = current($rows->toArray());

?>

<!DOCTYPE html>
<html>
<head>
  <title>User Profile</title>
</head>
<body>
  <h1>User Profile</h1>
  <p>Name: <?php echo $user->name; ?></p>
  <p>Email: <?php echo $user->email; ?></p>
  <p>Age: <?php echo $user->age; ?></p>
  <p>Date of Birth: <?php echo $user->dob; ?></p>
  <p>Contact: <?php echo $user->contact; ?></p>
</body>
</html>
