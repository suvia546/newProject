import express from "express";
import routes from "./routes/index"
import morgan from "morgan";
import cors from "cors";
const app = express();
/*
const allowedOrigin = ['https://backend-turnproject-production.up.railway.app']
const corsOption = {
    origin:(origin:string, callback:(a:any,b:boolean)=>void)=>{
        if(allowedOrigin.includes(origin) || !origin){
            callback(null, true);
        }else{
            callback(new Error('cors without permission'))
        }   
    },
    method:'GET,POST,PUT,DELETE',
    allowedHeaders:'Conten-Type, Authorization'
},*/

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin:true}));
app.use(routes);
export default app;