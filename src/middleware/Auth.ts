import { NextFunction, Request, Response } from "express";

export const validate = async (req:Request, res:Response, next: NextFunction)=>{

    const {token} = req.headers;
    if(token === "autenticado") next()
    else res.status(400).json(token)
    
}