<?php
$host = 'localhost';  // Cambiar por tu host
$usuario = 'joel';    // Cambiar por tu usuario
$contrasena = 'Jomedama2024!';     // Cambiar por tu contraseña
$base_de_datos = 'usuarios_db';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$base_de_datos", $usuario, $contrasena);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
    exit;
}
?>
