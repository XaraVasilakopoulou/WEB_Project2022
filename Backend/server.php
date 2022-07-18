<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $user = $_POST['email'];
    $pass = $_POST['password'];
    echo ("Hello from server:   $pass");
    echo ("Hello from server: $user and ");
?>