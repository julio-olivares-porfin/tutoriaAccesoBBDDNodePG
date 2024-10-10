const { Pool } = require("pg");

const pool = new Pool ({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "gestion_usuarios",
  allowExitOnIdle: true,

});

const agregarUsuario = async (nombre, apellido, edad, pais) => {
  const consulta = "INSERT INTO usuarios (nombre, apellido, edad, pais) VALUES ($1, $2, $3, $4)";
  const values = [nombre, apellido, edad, pais];
  const result = await pool.query (consulta, values);
  console.log("usuario agregado exitosamente!:", result.rowCount);

};


const obtenerUsuario = async () => {
 const consulta = "SELECT * FROM usuarios";
 const result = await pool.query (consulta);
 console.log(result.rows);

 return result.rows;
};

const obtenerUsuariosMayores = async () => {
  const consulta = "SELECT * FROM usuarios WHERE edad >= 18";
  const result = await pool.query (consulta);
  console.log(result.rows);

  return result.rows;
 };

 const obtenerUsuariosPais = async (pais) => {
  const consulta = "SELECT * FROM usuarios WHERE pais = $1";
  const values = [pais];
  const result = await pool.query (consulta,values);
  console.log(result.rows);

  return result.rows;
 };

module.exports = { agregarUsuario, obtenerUsuario, obtenerUsuariosMayores, obtenerUsuariosPais };
