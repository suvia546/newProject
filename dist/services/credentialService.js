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
exports.validateCredentialService = exports.credentialCreateService = void 0;
const data_source_1 = require("../config/data-source");
const data_source_2 = require("../config/data-source");
const credentialCreateService = (userName, password) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = yield data_source_1.dataBaseCredential.create({ userName: userName, password: password });
    yield data_source_1.dataBaseCredential.save(newCredential);
    const newUser = yield data_source_2.dataBaseUser.findOneBy({ id: newCredential.id });
    if (newUser) {
        newUser.credentialsld = newCredential;
        yield data_source_2.dataBaseUser.save(newUser);
    }
    else {
        throw Error("Error");
    }
});
exports.credentialCreateService = credentialCreateService;
const validateCredentialService = (userName, password) => __awaiter(void 0, void 0, void 0, function* () {
    const userFind = yield data_source_1.dataBaseCredential.findOneBy(({ userName: userName }));
    if (userFind) {
        if (userFind.password === password && userFind.userName === userName) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        throw Error("Invalid user");
    }
});
exports.validateCredentialService = validateCredentialService;
