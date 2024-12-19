"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginController = exports.userCreateController = exports.usersGetController = exports.userGetController = void 0;
const userService_1 = require("../services/userService");
const userGetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, userService_1.userGetService)(Number(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json("Error of user");
    }
    ;
});
exports.userGetController = userGetController;
const usersGetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.usersGetService)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json("Error of server");
    }
    ;
});
exports.usersGetController = usersGetController;
const userCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, userName, name, email, birthdate, nDni } = req.body;
        yield (0, userService_1.userCreateService)(password, userName, name, email, birthdate, nDni);
        res.status(201).json("Usuario registrado");
    }
    catch (error) {
        res.status(400).json("Error");
    }
    ;
});
exports.userCreateController = userCreateController;
const userLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, password } = req.body;
        const login = yield (0, userService_1.userLoginService)(userName, password);
        console.log(login);
        res.status(200).json(login);
    }
    catch (error) {
        res.status(400).json("user or password invalid");
    }
    ;
});
exports.userLoginController = userLoginController;
