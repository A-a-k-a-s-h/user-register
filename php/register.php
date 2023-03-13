<?php
require_once 'php/db.php';

$username = $_POST['username.value'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

// Check if the passwords match
if ($password != $confirm_password) {
    $response = array('status' => false, 'message' => 'Passwords do not match');
    echo json_encode($response);
    exit;
}

// Check if the username already exists in the database
$stmt = $pdo->prepare('SELECT COUNT(*) FROM users WHERE username = ?');
$stmt->execute([$username]);
if ($stmt->fetchColumn()) {
    $response = array('status' => false, 'message' => 'Username already exists');
    echo json_encode($response);
    exit;
}

// Insert the new user into the database
$stmt = $pdo->prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
$stmt->execute([$username, $email, password_hash($password, PASSWORD_DEFAULT)]);

// Return a success message
$response = array('status' => true, 'message' => 'Registration successful');
echo json_encode($response);
exit;
?>
