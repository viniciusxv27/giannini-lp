<?php
    unset($_SESSION['email']);
    unset($_SESSION['senha']);
    session_destroy();
    header('Location: login.php');
?>