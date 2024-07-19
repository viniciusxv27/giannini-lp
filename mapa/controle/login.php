<?php
    
    include_once('conecta.php');
    
    $erro = [];

    session_start();

    if(isset($_POST['submit']) && !empty($_POST['usuario']) && !empty($_POST['senha'])){
        $username = $_POST['usuario'];
        $password = $_POST['senha'];

        $sql = "SELECT * FROM admin WHERE usuario = '$username' and senha = '$password'";

        $result = $conexao->query($sql);

        if(mysqli_num_rows($result) < 1){
            unset($_SESSION['usuario']);
            unset($_SESSION['senha']);
            $erro[] = "Usuario e Senha invalidos.";
        } else{
            $_SESSION['usuario'] = $username;
            $_SESSION['senha'] = $password;
            header('Location: index.php');
        }
    }
    else{
    }   
?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <link rel="shortcut icon" href="../../assets/images/favicon.png" type="image/x-icon">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
    </head>
    <body>
        <section class="logo">
            <img src="../../assets/images/Logo_head.png" class="logo">
        </section>
        <form method="POST">
            <label>Usuario:</label>
            <input placeholder="Usuario" name="usuario" id="usuario" class="usuario" type="usuario" required>
            <label>Senha:</label>
            <input placeholder="Senha" name="senha" id="senha" class="senha" type="password" minlenght="8" maxlenght="12" required>
            <input name="submit" value="Entrar" id="submit" class="btn btn-success submit" type="submit">
        </form>
        <br>
        <br>
        <br>
        <?php 
            if(count($erro) > 0) {
                foreach($erro as $msg){
                    echo "<p>$msg</p>";
                }
            }
        ?>
    </body>
</html>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

*{
    margin: 0;
    padding: 0;
}

body{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #000;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
    -webkit-font-smoothing:antialiased;
}

h1{
    margin-top: 40px;
}

form{
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 300px;
}

form input{
    padding: 15px;
    font-size: 15px;
    margin-bottom: 20px;
    margin-top: 5px;
    border-radius: 20px;
    font-weight: bold;
    color: #39aa40;
    background-color: #fff;
    border: 1px solid #39aa40
}

form .submit{
    cursor:pointer;
}

.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 20px;
}

.logo img{
    width: 300px;
}
</style>