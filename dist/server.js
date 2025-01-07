"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
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
}*/
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: true }));
app.use(index_1.default);
exports.default = app;
