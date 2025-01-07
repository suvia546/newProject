"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userControllers_1 = require("../controllers/userControllers");
const express_1 = require("express");
//import {validate} from "../middleware/Auth";//todavia   ,validate,
const route = (0, express_1.Router)();
route.get("/", userControllers_1.usersGetController);
route.get("/:id", userControllers_1.userGetController);
route.post("/register", userControllers_1.userCreateController);
route.post("/login", userControllers_1.userLoginController);
exports.default = route;
