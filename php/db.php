<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'my_database';

$mysqli = new mysqli($host, $username, $password, $database);

if ($mysqli->connect_error) {
    die('Error connecting to database: ' . $mysqli->connect_error);
}

?>
