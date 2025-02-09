<?php
$host = 'localhost'; 
$usuario = 'root';    
$contrasena = '';     
$base_de_datos = 'tienda_db';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$base_de_datos", $usuario, $contrasena);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
    exit;
}
?>
