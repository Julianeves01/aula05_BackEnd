import { Router } from "express";

import docesRoutes from "./doces.routes.js";
import filmesRoutes from "./filmes.routes.js"

const routes = Router ();

routes.get("/", (req, res) => { //request, response
    return res.status(200). send({ message: "Servidor ta funfando amores!"})
});

routes.use("/doces", docesRoutes);
routes.use("/filmes", filmesRoutes);

export default routes;