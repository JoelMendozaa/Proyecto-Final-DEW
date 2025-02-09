-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS usuarios_db;

-- Usar la base de datos
USE usuarios_db;

-- Crear la tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    dni VARCHAR(20) NOT NULL UNIQUE,
    correo_electronico VARCHAR(100) NOT NULL UNIQUE,
    cuenta_bancaria VARCHAR(20),
    telefono VARCHAR(15),
    contrasena VARCHAR(255) NOT NULL,  -- Guardaremos las contraseñas de forma segura con hash
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Crear la tabla de sesiones
CREATE TABLE IF NOT EXISTS sesiones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    correo_electronico VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(255) NOT NULL,  -- Guardar la contraseña hash si se requiere
    fecha_sesion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
