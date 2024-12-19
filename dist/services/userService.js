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
exports.userLoginService = exports.userCreateService = exports.userGetService = exports.usersGetService = void 0;
const data_source_1 = require("../config/data-source");
const credentialService_1 = require("./credentialService");
const usersGetService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.dataBaseUser.find({
        relations: {
            credentialsld: true,
            turnId: true
        }
    });
    return users;
});
exports.usersGetService = usersGetService;
const userGetService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const usersFounded = yield data_source_1.dataBaseUser.find({
        relations: {
            turnId: true
        }
    });
    const userFounded = usersFounded.find((user) => user.id === id);
    if (userFounded) {
        return userFounded;
    }
    else {
        throw Error("Hubo un error");
    }
});
exports.userGetService = userGetService;
const userCreateService = (password, userName, name, email, birthdate, nDni) => __awaiter(void 0, void 0, void 0, function* () {
    //obtenerlo del body
    const user = yield data_source_1.dataBaseUser.create({ name, email, birthdate, nDni });
    const userID = yield data_source_1.dataBaseUser.save(user);
    yield (0, credentialService_1.credentialCreateService)(userName, password);
    return userID;
});
exports.userCreateService = userCreateService;
const userLoginService = (userName, password) => __awaiter(void 0, void 0, void 0, function* () {
    const userCredential = yield (0, credentialService_1.validateCredentialService)(userName, password);
    const crede = yield data_source_1.dataBaseCredential.findOneBy({ userName });
    console.log(userCredential, "es userlognservice");
    if (crede) {
        const users = yield data_source_1.dataBaseUser.find();
        const user = users.find((user) => user.id === crede.id);
        const userLogin = {
            id: crede.id,
            userName: crede.userName,
            password: crede.password
        };
        console.log(userCredential);
        if (userCredential) {
            console.log("USERLOGIN");
            return userLogin;
        }
        else {
            console.log("PASO POR ERROR");
            throw Error("Invalid user");
        }
    }
});
exports.userLoginService = userLoginService;
