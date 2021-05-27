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
    especialidade VARCHAR(255),
    CONSTRAINT fk_medico FOREIGN KEY (usercod) REFERENCES usuario (codigo)
);

CREATE TABLE sercretaria(
    usercode INT NOT NULL,
    medcode INT NOT NULL,
    CONSTRAINT fk_secuser FOREIGN KEY (usercode) REFERENCES usuario (codigo),
    CONSTRAINT fk_secmed FOREIGN KEY (medcode) REFERENCES medico (usercod)
);

CREATE TABLE consulta(
    idCons INT AUTO_INCREMENT,
    usercode INT NOT NULL,
    medcode INT NOT NULL,
    dataCons DATE NOT NULL,
    CONSTRAINT pk_consid PRIMARY KEY  (idCons),
    CONSTRAINT fk_consuser FOREIGN KEY (usercode) REFERENCES usuario (codigo),
    CONSTRAINT fk_consmed FOREIGN KEY (medcode) REFERENCES medico (usercod)
);

CREATE USER 'sistema'@'localhost' IDENTIFIED BY 'Dfffgl#2021';
GRANT ALL PRIVILEGES ON * . * TO 'sistema'@'localhost';