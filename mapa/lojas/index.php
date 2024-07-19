<?php
    include_once('conecta.php');
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Content-Type: application/json');

    $cmdSql = "SELECT * FROM lojas";

    $cxPrepare = $conexao->prepare($cmdSql);
    $dados = [
        'result'=>false,
        'valores' => []
    ];

    if($cxPrepare->execute()){
        if($cxPrepare->rowCount() > 0){
            $dados['result'] = true;
            $dados['valores'] = $cxPrepare->fetchAll(PDO::FETCH_ASSOC);
        }
    }
    echo json_encode($dados['valores'], JSON_NUMERIC_CHECK);
?>