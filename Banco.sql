CREATE DATABASE AgendaMedica;
USE AgendaMedica;
CREATE TABLE usuario(
    codigo INT AUTO_INCREMENT,
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
    sercretaria INT DEFAULT 0,
    CONSTRAINT pk_user PRIMARY KEY (codigo)
);

CREATE PROCEDURE insere_medico(
                IN inome  VARCHAR(255),
                IN idatanasc  DATE,
                IN icpf VARCHAR(14),
                IN itelefone VARCHAR(13),
                IN iemail VARCHAR(255),
                IN iendereco VARCHAR(255),
                IN ibairro VARCHAR(255),
                IN icidade VARCHAR(255),
                IN icep VARCHAR(9),
                IN isenha VARCHAR(255),
                IN icrm VARCHAR(30),
                IN iespecial VARCHAR(255),
                OUT id INT
                ) 
    
BEGIN
    INSERT INTO usuario(nome, datanasc, cpf, telefone,email,endereco,bairro,cidade,cep,senha,medico)
    VALUES(inome, idatanasc, icpf, itelefone,iemail,iendereco,ibairro,icidade,icep,isenha,1);

    SELECT codigo INTO id
    FROM usuario
    wHERE cpf = icpf;

    INSERT INTO medico (usercod, crm, especialidade)
    VALUES (id, icrm, iespecial);

    COMMIT WORK;
END;
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
    idCons   INT AUTO_INCREMENT,
    usercode INT NOT NULL,
    medcode  INT NOT NULL,
    dataCons DATETIME NOT NULL,
    CONSTRAINT pk_consid PRIMARY KEY  (idCons),
    CONSTRAINT fk_consuser FOREIGN KEY (usercode) REFERENCES usuario (codigo),
    CONSTRAINT fk_consmed FOREIGN KEY (medcode) REFERENCES medico (usercod)
);



CREATE USER 'sistema'@'localhost' IDENTIFIED BY 'Dfffgl#2021';
GRANT ALL PRIVILEGES ON * . * TO 'sistema'@'localhost';