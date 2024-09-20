CREATE DATABASE SalveFocinhos;

use SalveFocinhos;

CREATE TABLE usuarios(
	id INT PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	telefone VARCHAR(255) NOT NULL,
	senha VARCHAR(255) NOT NULL,
	ft_perfil VARCHAR(255)
);

CREATE TABLE postagem(
	ft_public VARCHAR(255),
	tex_pub VARCHAR(255) NOT NULL,
	data_public date,
	autor VARCHAR(255) NOT NULL
);

create table doacoes(
	id int primary key auto_increment,
    ong varchar(255) not null,
    nome_completo varchar(255) not null,
    email varchar(255) not null,
	produto varchar(255) not null
);

CREATE TABLE usuariodoador(
	id int primary key auto_increment,
    nome varchar(255) not null,
    email varchar(255) not null unique,
    cidade varchar(255) not null,
    senha varchar(255) not null
);

select * from doacoes;
drop table usuariodoador;

select * from usuariodoador;