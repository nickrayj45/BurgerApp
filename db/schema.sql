CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT PRIMARY KEY,
	burgers VARCHAR (30),
	devoured BOOLEAN
)