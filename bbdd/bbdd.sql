-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS tienda_db;

-- Usar la base de datos
USE tienda_db;

-- Crear la tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL UNIQUE,
    cuenta_bancaria VARCHAR(20),
    telefono VARCHAR(15),
    contrasena VARCHAR(255) NOT NULL,  -- Guardaremos las contraseñas de forma segura con hash
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS productos (
    id  INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255)
    descripcion TEXT,
    imagen TEXT,
    precio FLOAT,
    disponibilidad VARCHAR(255)
);