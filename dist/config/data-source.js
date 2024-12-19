"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBaseTurn = exports.dataBaseCredential = exports.dataBaseUser = exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const userEntity_1 = require("../entity/userEntity");
const credentialEntity_1 = require("../entity/credentialEntity");
const turnEntity_1 = require("../entity/turnEntity");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    //npx typeorm migration:run
    // url:"postgresql://postgres:lGYxWoixirvmOMKACVqtFMwrnXidgFnM@junction.proxy.rlwy.net:38067/railway",
    type: "postgres",
    host: "localhost", //"junction.proxy.rlwy.net",
    port: 5433, //38067,
    username: "postgres", //"postgres",
    password: "Ageofultron123.", //"lGYxWoixirvmOMKACVqtFMwrnXidgFnM",
    database: "postgres", //"railway",
    //dropSchema:true,
    //synchronize: true,
    logging: false,
    entities: [userEntity_1.Usser, credentialEntity_1.Credential, turnEntity_1.Turn],
    subscribers: [],
    migrations: ["dist/migration/*.js"],
});
console.log("ENVIRONMENT VARIABLE:", process.env.HOST_DBR, process.env.USERNAME_DBR, process.env.PASSWORD_DBR, process.env.DATABASER);
exports.dataBaseUser = exports.AppDataSource.getRepository(userEntity_1.Usser);
exports.dataBaseCredential = exports.AppDataSource.getRepository(credentialEntity_1.Credential);
exports.dataBaseTurn = exports.AppDataSource.getRepository(turnEntity_1.Turn);
