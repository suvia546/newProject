import express from "express";
import routes from "./routes/index"
import morgan from "morgan";
import cors from "cors";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({origin:true}));
app.use(routes);
export default app;