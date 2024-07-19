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
        <title>Controle de Mapa</title>
    </head>
    <body>
        <section class="logo">
            <img src="../../assets//images/Logo_head.png" class="logo">
        </section>
        <h1>Controle de Mapa</h1>
        <br>
        <br>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome da Loja</th>
                <th scope="col">Endereço 1</th>
                <th scope="col">Ação</th>
                </tr>
            </thead>
            <tbody>
            <?php
                
                $sql = "SELECT * FROM lojas";

                $result = $conexao->query($sql);
        
                while($user_data = mysqli_fetch_assoc($result)) {
                    
                    if ($user_data['id'] == "") {
                        echo "Sem Resultados!";
                    } else {
                        echo "<tr>";
                        echo "<th scope='row'>".$user_data['id']."</th>";
                        echo "<td>".$user_data['nome']."</td>";
                        echo "<td>".$user_data['endereco1']."</td>";
                        echo "<td>
                        <a class='btn btn-primary' href='editar.php?loja=$user_data[id]'>Editar</a>
                        <a class='btn btn-danger' href='remover.php?loja=$user_data[id]'>Remover</a>
                        </td>";
                        echo "</tr>";
                    }
                }
                ?>
            </tbody>
        </table>
        <br>
        <a style="margin-bottom:20px" class="btn btn-primary" href="links.php">Links de Apoio</a>
        <br>
        <a style="margin-bottom:20px" class="btn btn-success" href="adicionar.php">Adicionar Loja</a>
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