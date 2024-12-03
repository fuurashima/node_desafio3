const { obtenerPost, añadirPost} = require('./server')
const express =require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors());
app.listen(3000, console.log("Servidor conectado :D"))

app.get("/posts", async (req,res) =>{
    const posts = await obtenerPost()
    res.json(posts)
})

app.post("/posts", async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body
    await añadirPost(titulo, img, descripcion, likes)
    res.send("Post añadido correctamente")
})

