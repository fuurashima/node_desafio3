const { Pool } = require('pg')
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Coxinha21nov',
    database: 'likeme',
    port: 5432,
    
 })

 const obtenerPost = async () => {
   const {rows} = await pool.query ("SELECT * FROM posts")
   console.log(rows)
   return rows
 }
 const añadirPost = async (titulo, img, descripcion, likes) => {
   const consulta = "INSERT INTO posts (titulo,img,descripcion,likes) VALUES ($1, $2, $3, $4)"
   const values = [titulo,img,descripcion,likes]
   await pool.query(consulta,values)
   console.log("Datos recibidos:", { titulo, img, descripcion, likes });
 }

 module.exports = {obtenerPost, añadirPost}
