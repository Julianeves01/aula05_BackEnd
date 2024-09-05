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

//Rota para buscar todos os elementos do array guloseimas
docesRoutes.get("/", (req, res) => {
    return res.status(200).send(guloseimas);
})

//Rota para criar nova guloseima
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

//Rota para buscar um elemento específico do array guloseimas
docesRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    const guloseima = guloseimas.find((doce) => doce.id === Number(id))

    console.log(guloseima)

//Se eu não tenho uma guloseima, eu vou retornar uma reposta, tendo como resposta o status 404, mostrando uma mensagem
    if (!guloseima) {
        return res.status(404).send ({ message: "Guloseima não encontrada!"});
    }
    return res.status(200).send (guloseima)
})


export default docesRoutes;