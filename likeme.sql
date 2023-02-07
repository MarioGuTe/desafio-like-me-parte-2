CREATE DATABASE likeme;

CREATE TABLE posts (id Serial, titulo VARCHAR(25), img VARCHAR(1000), 
descripcion VARCHAR(255), likes INT);

SELECT * FROM posts;