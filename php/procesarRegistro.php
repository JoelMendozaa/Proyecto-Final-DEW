<?php
// Iniciar sesión y manejar errores
session_start();

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";  // Cambia por la contraseña de tu base de datos si es necesario
$dbname = "usuarios_db";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Verificar si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = $conn->real_escape_string($_POST['nombre']);
    $dni = $conn->real_escape_string($_POST['dni']);
    $email = $conn->real_escape_string($_POST['correo_electronico']);
    $cuenta_bancaria = $conn->real_escape_string($_POST['cuenta_bancaria']);
    $telefono = $conn->real_escape_string($_POST['telefono']);
    $password = $_POST['contrasena'];

    // Validar que los campos no estén vacíos
    if (empty($nombre) || empty($dni) || empty($email) || empty($password)) {
        echo "Por favor, rellena todos los campos obligatorios.";
        exit;
    }

    // Hashear la contraseña
    $password_hashed = password_hash($password, PASSWORD_BCRYPT);

    // Verificar si el correo ya existe
    $sql_check = "SELECT * FROM usuarios WHERE correo_electronico = '$email' OR dni = '$dni'";
    $result_check = $conn->query($sql_check);

    if ($result_check->num_rows > 0) {
        echo "El correo electrónico o el DNI ya están registrados.";
    } else {
        // Insertar el nuevo usuario en la base de datos
        $sql = "INSERT INTO usuarios (nombre, dni, correo_electronico, cuenta_bancaria, telefono, contrasena)
                VALUES ('$nombre', '$dni', '$email', '$cuenta_bancaria', '$telefono', '$password_hashed')";

        if ($conn->query($sql) === TRUE) {
            echo "Registro exitoso. Puedes iniciar sesión.";
        } else {
            echo "Error al registrar: " . $conn->error;
        }
    }

    // Cerrar la conexión
    $conn->close();
}
?>
