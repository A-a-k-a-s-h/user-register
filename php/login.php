<?php
// Set Redis as the session handler
ini_set('session.save_handler', 'redis');
ini_set('session.save_path', 'tcp://127.0.0.1:6379');

session_start();
require_once('php/db.php');

if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Query the database to check if user exists with this email and password
    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = mysqli_query($conn, $sql);

    // If user exists, create session and redirect to profile page
    if (mysqli_num_rows($result) == 1) {
        $row = mysqli_fetch_assoc($result);
        $_SESSION['user_id'] = $row['user_id'];
        header('Location:php/profile.php');
        exit;
    } else {
        // If user doesn't exist, display error message
        $error = "Invalid email or password";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="login-page">
        <div class="form">
            <form class="login-form" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <?php if(isset($error)) { ?>
                    <p class="error"><?php echo $error; ?></p>
                <?php } ?>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit" name="submit">login</button>
                <p class="message">Not registered? <a href="php/register.php">Create an account</a></p>
            </form>
        </div>
    </div>
    <script src="js/login.js"></script>
</body>
</html>


