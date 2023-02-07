const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "mariogt",
  database: "likeme",
  allowExitOnIdle: true,
});

const agregarPost = async (titulo, img, descripcion) => {
  const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, 0)";
  const values = [titulo, img, descripcion];
  const result = await pool.query(consulta, values);
  console.log("post agregado");
};

const obtenerPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
};

const modificarPost = async (titulo, img, descripcion, id) => {
  const consulta =
    "UPDATE posts SET titulo = $1, img= $2, descripcion = $3 WHERE id = $4";
  const values = [titulo, img, descripcion, id];
  const result = await pool.query(consulta, values);
};

const eliminarPost = async (id) => {
  const consulta = "DELETE FROM posts WHERE id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);
};

module.exports = { agregarPost, obtenerPosts, modificarPost, eliminarPost };
