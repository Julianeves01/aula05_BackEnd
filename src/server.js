import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

const guloseimas = [
    {
        id: 1,
        nome:"Trufa",
        preco: 4.50
    },
    {
        id: 2,
        nome: "Sorvete",
        preco: 8.60
    },
    {
        id: 3,
        nome: "Petit gateau",
        preco: 12.00
    }
]

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

app.get("/doces", (req, res) => {
    return res.status(200). send(guloseimas);
})

app.post("/doces", (req, res) => {
    const {nome,preco} = req.body;

    const novoDoce = {
        id: guloseimas.length +1,
        nome: nome,
        preco:preco,
    };

    guloseimas.push(novoDoce)
    return res.status(201). send(guloseimas);
});


app.get("/", (req, res) => { //request, response
    return res.status(200). send({ message: "Hello, world!"})
})


app.listen(port, () => {
    console.log(`⚡ Server started on http://localhost:${port}`)
})