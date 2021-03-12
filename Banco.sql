CREATE DATABASE AgendaMedica;

CREATE TABLE usuario(
    codigo INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    datanasc DATE NOT NULL,
    cpf VARCHAR(14) UNIQUE,
    telefone VARCHAR(13),
    email VARCHAR(255) UNIQUE,
    endereco VARCHAR(255),
    bairro VARCHAR(255),
    cidade VARCHAR(255),
    cep VARCHAR(9),
    senha VARCHAR(255),
    paciente INT DEFAULT 0,
    medico INT DEFAULT 0,
    sercretaria INT DEFAULT 0
);

CREATE TABLE medico(
    usercod INT NOT NULL,
    crm VARCHAR(30) UNIQUE,
    especialidade VARCHAR(255)
);

