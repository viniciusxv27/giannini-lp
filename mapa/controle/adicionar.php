<?php
    session_start();

    include_once('conecta.php');
    
    if((!isset($_SESSION['email']) == true) and (!isset($_SESSION['senha']) == true)) {
        unset($_SESSION['email']);
        unset($_SESSION['senha']);
        header('Location: login.php');
    }
    $logado = $_SESSION['senha'];

    $erro = [];

    if(isset($_POST['submit'])){

        $nome = $_POST['nome'];
        $placeid = $_POST['placeid'];
        $endereco1 = $_POST['endereco1'];
        $endereco2 = $_POST['endereco2'];
        $latitude = $_POST['latitude'];
        $longitude = $_POST['longitude'];
        $produtos = isset($_POST['itens']) ? implode(', ', $_POST['itens']) : '';
        
        $sql = 'INSERT INTO lojas (nome, placeid, endereco1, endereco2, latitude, longitude, produtos)
        VALUES ("'.$nome.'", "'.$placeid.'", "'.$endereco1.'", "'.$endereco2.'", "'.$latitude.'", "'.$longitude.'", "'.$produtos.'");';

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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <link rel="shortcut icon" href="../../assets//images/favicon.png" type="image/x-icon">
        <title>Adicionar Loja</title>
    </head>
    <body>
        <section class="logo">
            <img src="../../assets/images/Logo_head.png" class="logo">
        </section>
        <h1>Adicionar Loja</h1>
        <form enctype="multipart/form-data" action="adicionar.php" method="POST">
            <label for="nome">Nome</label>
            <br>
            <input type="text" name="nome" id="nome">
            <br>
            <label for="placeid">Place_ID</label>
            <br>
            <input type="text" name="placeid" id="placeid">
            <br>
            <label for="endereco1">Endereço 1</label>
            <br>
            <input type="text" name="endereco1" id="endereco1">
            <br>
            <label for="endereco2">Endereço 2</label>
            <br>
            <input type="text" name="endereco2" id="endereco2">
            <br>
            <label for="latitude">Latitude</label>
            <br>
            <input type="text" name="latitude" id="latitude">
            <br>
            <label for="longitude">Longitude</label>
            <br>
            <input type="text" name="longitude" id="longitude">
            <br>
            <label for="products">Produtos</label>
            <br>
            <label for="item1" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item1" value="Supersonic GMW33 Pau-Ferro"> Supersonic GMW33 Pau-Ferro</label><br>
            <br>
            <label for="item2" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item2" value="Gemini GMW42 Louro-Preto"> Gemini GMW42 Louro-Preto</label><br>
            <br>
            <label for="item3" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item3" value="Gemini GMW43 Pau-Ferro"> Gemini GMW43 Pau-Ferro</label><br>
            <br>
            <label for="item4" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item4" value="Sonic TL GMW23 P-90 Pau-Ferro"> Sonic TL GMW23 P-90 Pau-Ferro</label><br>
            <br>
            <label for="item5" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item5" value="Sonic TL GMW21-P-90 Cedro"> Sonic TL GMW21-P-90 Cedro</label><br>
            <br>
            <label for="item6" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item6" value="Sonic TL GMW25-HH Tobacco Sunburst"> Sonic TL GMW25-HH Tobacco Sunburst</label><br>
            <br>
            <label for="item7" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item7" value="Sonic TL GMW23-SS Pau-Ferro"> Sonic TL GMW23-SS Pau-Ferro</label><br>
            <br>
            <label for="item8" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item8" value="Item 4"> Sonic ST GMW84-3S 3 Tone Sunburst</label><br>
            <br>
            <label for="item9" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item9" value="Sonic ST GMW84-3S 3 Tone Sunburst"> Sonic ST GMW83-HSS Pau-Ferro</label><br>
            <br>
            <label for="item10" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item10" value="Sonic ST Bass GMW83B-4 Pau-Ferro"> Sonic ST Bass GMW83B-4 Pau-Ferro</label><br>
            <br>
            <label for="item11" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item11" value="Sonic ST Bass GMW82B-5 Louro-Preto"> Sonic ST Bass GMW82B-5 Louro-Preto</label><br>
            <br>
            <label for="item12" style="cursor: pointer;" ><input style="cursor: pointer;" type="checkbox" name="itens[]" id="item12" value="Sonic ST Bass GMW81B-4"> Sonic ST Bass GMW81B-4</label><br>
            <br>
            <input name="submit" value="Adicionar" id="submit" class="btn btn-success submit" type="submit">
            <br>
            <a class="btn btn-primary" href="index.php">Voltar ao Inicio</a>
        </form>
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