import { Request, Response } from "express"
import { userCreateService, userGetService ,usersGetService,userLoginService} from "../services/userService"
import { Iuser } from "../interfaces/user";


export const userGetController = async (req:Request,res:Response)=>{
    try {
     const {id} = req.params;
     const user = await userGetService(Number(id));
     res.status(200).json(user);
    } catch (error) {
     res.status(404).json("Error of user");
    };
};


export const usersGetController = async (req:Request,res:Response)=>{
    try {
        console.log("USERSController1")
        const users : Iuser[] = await usersGetService();
        console.log("USERSController2")
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json("Error of server");
    };
   
};

export const userCreateController = async (req:Request,res:Response)=>{
    try {
        const {password, userName, name, email, birthdate, nDni} = req.body;
            await userCreateService(password, userName, name, email, birthdate, nDni);
             res.status(201).json("Usuario registrado");
    } catch (error) {
        res.status(400).json("Error");
    };
};

export const userLoginController = async (req:Request,res:Response)=>{
    try {
        const {userName, password} = req.body;
       const login =  await userLoginService(userName, password);
       console.log(login)
         res.status(200).json(login);
    } catch (error) {
        res.status(400).json("user or password invalid");
    };
      
};


