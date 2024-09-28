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

foto texto data autor 