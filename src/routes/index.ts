import {Router} from "express";
import route from "./userRouter"
import routeTurn from "./turnsRouter"//rutas de turno
const routes: Router = Router();

routes.use("/user",route);

routes.use("/turn",routeTurn);

export default routes;
