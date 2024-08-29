import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())


const filmesMarcantes = [
    {
        id: 1001,
        titulo: "Milagre na cela 7",
        genero: "Drama",
        emCartaz: false
    },
    {
        id: 1002,
        titulo: "Divertidamente2",
        genero: "Animação",
        emCartaz: false
    },
    {
        id: 1003,
        titulo: "Meninas malvadas",
        genero: "Comedia, romance, adolescente, drama",
        emCartaz: false
    }
]


app.get("/filmes", (req, res) => {
    return res.status(200). send(filmesMarcantes);
})




app.get("/", (req, res) => { //request, response
    return res.status(200). send({ message: "Hello, world!"})
})


app.listen(port, () => {
    console.log(`⚡ Server started on http://localhost:${port}`)
})