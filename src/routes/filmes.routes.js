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