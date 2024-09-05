import { Router } from "express";

const docesRoutes = Router();

const guloseimas = [
    {
        id: 1,
        nome: "Trufa",
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

docesRoutes.get("/", (req, res) => {
    return res.status(200).send(guloseimas);
})

docesRoutes.post("/doces", (req, res) => {
    const { nome, preco } = req.body;

    const novoDoce = {
        id: guloseimas.length + 1,
        nome: nome,
        preco: preco,
    };

    guloseimas.push(novoDoce)
    return res.status(201).send(guloseimas);
});

export default docesRoutes;