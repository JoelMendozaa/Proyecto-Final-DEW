<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET");
header("Access-Control-Allow-Headers: Content-Type");

session_start();

// Conexión con la base de datos
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtener los datos JSON enviados desde el frontend
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    // Validar si los campos obligatorios están presentes
    if (empty($data['nombre']) || empty($data['dni']) || empty($data['email']) || empty($data['telefono']) || empty($data['tarjetaCredito']) || empty($data['password'])) {
        echo json_encode(['message' => 'Faltan datos necesarios', 'status' => 'error']);
        exit;
    }

    // Sanitizar los datos
    $nombre = htmlspecialchars($data['nombre']);
    $dni = htmlspecialchars($data['dni']);
    $email = htmlspecialchars($data['email']);
    $telefono = htmlspecialchars($data['telefono']);
    $tarjetaCredito = htmlspecialchars($data['tarjetaCredito']);
    $password = password_hash($data['password'], PASSWORD_BCRYPT);  // Encriptamos la contraseña

    // Preparar la consulta SQL
    $sql = "INSERT INTO usuarios (nombre, dni, email, telefono, tarjetaCredito, password) 
            VALUES (:nombre, :dni, :email, :telefono, :tarjetaCredito, :password)";
    
    // Ejecutar la consulta
    try {
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':nombre', $nombre);
        $stmt->bindParam(':dni', $dni);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':telefono', $telefono);
        $stmt->bindParam(':tarjetaCredito', $tarjetaCredito);
        $stmt->bindParam(':password', $password);
        
        if ($stmt->execute()) {
            echo json_encode(['message' => 'Usuario registrado correctamente', 'status' => 'success']);
        } else {
            echo json_encode(['message' => 'Error al registrar el usuario', 'status' => 'error']);
        }
