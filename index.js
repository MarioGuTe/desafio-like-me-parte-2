const express = require("express");
const app = express();
const cors = require("cors");
const { Pool } = require("pg");
const {
  agregarPost,
  obtenerPosts,
  modificarPost,
  eliminarPost,
} = require("./posts");

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("servidor encendido");
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await obtenerPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    await agregarPost(titulo, img, descripcion);
    res.send("Post agregado con éxito");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, img, descripcion } = req.body;
    await modificarPost(titulo, img, descripcion, id);
    res.send("Post modificado con éxito");
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await eliminarPost(id);
    res.send("Post eliminado con éxito");
  } catch (error) {
    res.status(500).send(error);
  }
});
