import {userGetController, userCreateController,userLoginController,usersGetController} from "../controllers/userControllers";
import  {Router} from "express";
//import {validate} from "../middleware/Auth";//todavia   ,validate,

const route: Router = Router();

route.get("/",usersGetController);

route.get("/:id",userGetController);

route.post("/register",userCreateController)

route.post("/login",userLoginController)


export default route;