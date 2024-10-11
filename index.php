<?php
    $servidor = "localhost";
    $usuario = "root";
    $senha = "";
    $db = "teste";

    $conexao = mysqli_connect($servidor, $usuario, $senha, $db);

    $query = "SELECT * FROM alunos";

    $consulta_alunos = mysqli_query($conexao, $query);

    while( $linha = mysqli_fetch_array($consulta_alunos)){
        echo $linha['nome'], '<br/>';
    }

?>