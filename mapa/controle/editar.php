<?php
    session_start();

    include_once('conecta.php');

    $id = $_GET['loja'];
    
    if((!isset($_SESSION['email']) == true) and (!isset($_SESSION['senha']) == true)) {
        unset($_SESSION['email']);
        unset($_SESSION['senha']);
        header('Location: login.php');
    }
    $logado = $_SESSION['senha'];

    $erro = [];

    if(isset($_POST['submit'])){  
        $sql = 'UPDATE lojas
        SET nome = "'.$_POST["nome"].'", placeid = "'.$_POST["placeid"].'", endereco1 = "'.$_POST["endereco1"].'", endereco2 = "'.$_POST["endereco2"].'", latitude = "'.$_POST["latitude"].'", longitude = "'.$_POST["longitude"].'"
        WHERE id = '.$_POST['id'].' ';

        $result = $conexao->query($sql);
        header('Location: index.php');
    }
?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="../../assets/images/favicon.png" type="image/x-icon">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <title>Editar Loja</title>
    </head>
    <body>
        <section class="logo">
            <img src="../../assets/images/Logo_head.png" class="logo">
        </section>
        <h1>Editar Loja</h1>
        <form enctype="multipart/form-data" action="" method="POST">
            <?php
                $sql = "SELECT * FROM lojas WHERE id =".$id."";

                $result = $conexao->query($sql);

                while($user_data = mysqli_fetch_assoc($result)){
                    if ($user_data['id'] == "") {
                        echo "Sem Resultados!";
                    } else {
                        echo '<label>ID: (não mude)</label>';
                        echo '<br>';
                        echo '<input name="id" value="'.$user_data['id'].'" id="id" class="id" type="id" Readonly>';
                        echo '<br>';
                        echo '<label>Nome:</label>';
                        echo '<br>';
                        echo '<input required value="'.$user_data['nome'].'" name="nome" id="nome" class="nome" type="text">';
                        echo '<br>';
                        echo '<label>Place ID:</label>';
                        echo '<br>';
                        echo '<input required value="'.$user_data['placeid'].'" name="placeid" id="placeid" class="nome" type="text">';
                        echo '<br>';
                        echo '<label>Endereço 1:</label>';
                        echo '<br>';
                        echo '<input required value="'.$user_data['endereco1'].'" name="endereco1" id="endereco1" class="nome" type="text">';
                        echo '<br>';
                        echo '<label>Endereço 2:</label>';
                        echo '<br>';
                        echo '<input required value="'.$user_data['endereco2'].'" name="endereco2" id="endereco2" type="text">';
                        echo '<br>';
                        echo '<label>Latitude:</label>';
                        echo '<br>';
                        echo '<input required value="'.$user_data['latitude'].'" name="latitude" id="latitude" type="text">';
                        echo '<br>';
                        echo '<label>Longitude:</label>';
                        echo '<br>';
                        echo '<input required value="'.$user_data['longitude'].'" name="longitude" id="longitude" type="text">';
                        echo '<br>';
                    }
                }
            ?>
            <br>
            <input name="submit" value="Salvar" id="submit" class="btn btn-success submit" type="submit">
            <br>
            <a class="btn btn-primary" href="index.php">Voltar ao Inicio</a>
        </form>
        <br>
        <br>
        <?php
            if(count($erro) > 0){
                foreach($erro as $msg){
                    echo "<p><$msg/p>";
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
    font-weight: bold;
}

form input{
    padding: 15px;
    font-size: 15px;
    margin-bottom: 20px;
    margin-top: 5px;
    border-radius: 20px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border: 1px solid #39aa40;
}

form .submit{
    cursor:pointer;
}

#id, #db{
    cursor: not-allowed;
}

.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 20px;
}

.logo img{
    width: 300px;
}

a{
    color: white;
}

</style>