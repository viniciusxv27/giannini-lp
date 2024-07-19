<?php
    session_start();

    include_once('conecta.php');
    
    if((!isset($_SESSION['email']) == true) and (!isset($_SESSION['senha']) == true)) {
        unset($_SESSION['email']);
        unset($_SESSION['senha']);
        header('Location: login.php');
    }

    $logado = $_SESSION['senha'];

    $id = $_GET['loja'];

    $result = mysqli_query($conexao, "DELETE FROM lojas WHERE id = '$id'");

    header('Location: index.php');

?>