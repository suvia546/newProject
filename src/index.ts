import app from "./server";
import "reflect-metadata";
import {AppDataSource} from "./config/data-source";
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
.then((res) =>{
    console.log("connecting to DataBase");
    app.listen(PORT, ()=>{//coreegir PORT
        console.log( `server listening on port ${PORT}`)
    });
});
