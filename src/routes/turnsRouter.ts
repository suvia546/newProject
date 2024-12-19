import {Router} from "express";
const routeTurn = Router();
import {turnGetController, turnsGetController, turnCreateController, turnsUpdateController} from "../controllers/turnController";

routeTurn.get("/",turnsGetController);

routeTurn.get("/:id",turnGetController);

routeTurn.post("/schedule",turnCreateController);

routeTurn.put("/cancel/:id",turnsUpdateController);

export default routeTurn;
