import { Router } from "express";

import docesRoutes from "./doces.routes.js";

const routes = Router ();

routes.get("/", (req, res) => { //request, response
    return res.status(200). send({ message: "Servidor funfando amores!"})
});

routes.use("/doces", docesRoutes);

export default routes;