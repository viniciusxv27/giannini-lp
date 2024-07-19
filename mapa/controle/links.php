<?php
    session_start();
    include_once('conecta.php');
    if((!isset($_SESSION['email']) == true) and (!isset($_SESSION['senha']) == true)) {
        unset($_SESSION['email']);
        unset($_SESSION['senha']);
        header('Location: login.php');
    }
    $logado = $_SESSION['senha'];
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <link rel="shortcut icon" href="../../assets/images/favicon.png" type="image/x-icon">
        <title>Links de Apoio</title>
    </head>
    <body>
        <section class="logo">
            <img src="../../assets//images/Logo_head.png" class="logo">
        </section>
        <h1>Links de Apoio</h1>
        <br>
        <p>Tutorial: <a href="">Entrar</a></p>
        <p>Buscar Place ID: <a target="_blank" href="https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder">Entrar</a></p>
        <br>
        <br>
        <a style="margin-bottom:20px" class="btn btn-primary" href="index.php">Voltar</a>
        <br>
        <a style="margin-bottom:20px" class="btn btn-danger" href="sair.php">Sair da Conta</a>
    </body>
</html>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

*{
    margin:0;
    padding:0;
    font-family: 'Montserrat';
    text-align:center;
    background-color:#fff;
    color:#000;
}

body{
    margin-top:50px;
}

h1{
    color: #000;
}

.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 20px;
}

.logo img{
    width: 200px;
}
</style>