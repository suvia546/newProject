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
exports.turnCancelledService = exports.turnCreateService = exports.turnGetService = exports.turnsGetService = void 0;
const data_source_1 = require("../config/data-source");
const data_source_2 = require("../config/data-source");
//import {Usser} from "../entity/userEntity";
//import {IturnDtb} from "../dtb/turnDtb";
const turnsGetService = () => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield data_source_1.dataBaseTurn.find();
    return turns;
});
exports.turnsGetService = turnsGetService;
const turnGetService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turns = yield data_source_1.dataBaseTurn.findOneBy({ id });
    return turns;
});
exports.turnGetService = turnGetService;
const turnCreateService = (date, time, userId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = yield data_source_2.dataBaseUser.findOneBy({ id: userId });
    console.log("findUser de la db en turnCreateService", findUser);
    if (findUser) {
        const turnRegister = { date: date, time: time, userId: findUser, status: status };
        console.log("turnregister de turnCreateService", turnRegister);
        const newTurn = yield data_source_1.dataBaseTurn.create(turnRegister);
        const turnId = yield data_source_1.dataBaseTurn.save(newTurn);
        console.log("newTurn de turnCreateService", turnId); //
        return newTurn;
    }
    else {
        throw new Error("User not found");
    }
});
exports.turnCreateService = turnCreateService;
//-------error
/*
  Object.assign(findUser, turnId:turnId.push(newTurn))
  if(Array.isArray(findUser.turnId)){
    findUser.turnId.push(newTurn);

    await dataBaseUser.save(findUser);
  };
  */
const turnCancelledService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const turnNumber = yield data_source_1.dataBaseTurn.findOneBy({ id });
    if (turnNumber) {
        turnNumber.status = "cancelled";
        yield data_source_1.dataBaseTurn.save(turnNumber);
    }
    else {
        throw new Error("Reserva invalida");
    }
});
exports.turnCancelledService = turnCancelledService;
