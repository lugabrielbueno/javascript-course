
<?php

$usu_id = $_GET['q'];

$conexao = new PDO("mysql:host=mariadb;dbname=padrao7",'root','root');


$stRead = $conexao->query("SELECT * FROM tb_usuarios WHERE usu_id = '$usu_id'");

$read_dados = $stRead->fetchAll();

foreach($read_dados as $dados);

$json = array(
  "nome" => $dados['usu_nome'],
  "email" => $dados['usu_email']
  
);
$file = json_encode($json);


?>


  <?php print_r($file) ?>