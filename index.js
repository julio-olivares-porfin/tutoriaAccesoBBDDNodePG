const { obtenerUsuario, agregarUsuario, obtenerUsuariosMayores, obtenerUsuariosPais, modificarUsuario, eliminarUsuario } = require("./consultas")

const express = require("express");

const app = express();

app.use(express.json());

app.listen (3000, console.log("servidor arriba en el puerto 3000"));

app.get ("/usuarios", async (req, res) => {
  const usuarios = await obtenerUsuario()
  res.json(usuarios)
});

app.post ("/usuarios", async (req, res) => {
  const {nombre, apellido, edad, pais} = req.body
  await agregarUsuario(nombre, apellido, edad, pais);
  res.send("usuario agregado con éxito")

});

app.get ("/usuarios/mayores", async (req, res) => {
  const usuarios = await obtenerUsuariosMayores()
  res.json(usuarios)
});

app.get ("/usuarios/:pais", async (req, res) => {
  const { pais } = req.params
  const usuarios = await obtenerUsuariosPais(pais)
  res.json(usuarios)
});

app.put ("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.query;
  //  const { nombre } = req.body;
  await modificarUsuario(nombre, id);
  res.send("usuario modificado con éxito");
});

app.delete ("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  await eliminarUsuario(id);
  res.send("usuario eliminado con éxito");
});



