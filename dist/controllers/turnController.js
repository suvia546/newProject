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
exports.turnsUpdateController = exports.turnCreateController = exports.turnGetController = exports.turnsGetController = void 0;
const turnService_1 = require("../services/turnService");
const turnsGetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const turns = yield (0, turnService_1.turnsGetService)();
        res.status(200).json(turns);
    }
    catch (error) {
        res.status(500).json("error de servidor");
    }
    ;
});
exports.turnsGetController = turnsGetController;
const turnGetController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const turn = yield (0, turnService_1.turnGetService)(Number(id));
        res.status(200).json(turn);
    }
    catch (error) {
        res.status(500).json("error de servidor");
    }
    ;
});
exports.turnGetController = turnGetController;
const turnCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, time, userId, status } = req.body;
        console.log(userId, "turnController");
        const turn = yield (0, turnService_1.turnCreateService)(date, time, userId, status);
        res.status(200).json(turn);
    }
    catch (error) {
        console.log("hay un error");
        res.status(500).json(error);
    }
    ;
});
exports.turnCreateController = turnCreateController;
const turnsUpdateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params; //?????verificar
        yield (0, turnService_1.turnCancelledService)(Number(id));
        res.status(200).json("Turno cancelado...");
    }
    catch (error) {
        res.status(404).json("Error");
    }
});
exports.turnsUpdateController = turnsUpdateController;
