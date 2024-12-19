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
exports.CreateTable1734342811157 = void 0;
class CreateTable1734342811157 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
            CREATE TABLE "credentials" (
           id SERIAL PRIMARY KEY,
           userName VARCHAR(100) NOT NULL UNIQUE,
           password VARCHAR(100) NOT NULL UNIQUE
            )
        `);
            yield queryRunner.query(`
            CREATE TABLE "users" (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) NOT NULL UNIQUE,
            birthdate VARCHAR(150) NOT NULL UNIQUE,
            nDni INTEGER,
            credential INT UNIQUE,
            FOREIGN KEY (credential) REFERENCES credentials (id) ON DELETE CASCADE
            )
        `);
            yield queryRunner.query(`
            CREATE TABLE "turns" (
            id SERIAL PRIMARY KEY,
            date VARCHAR(150) NOT NULL,
            time VARCHAR(100) NOT NULL,
            userId INT,
            FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
            status VARCHAR(50) NOT NULL)
        `);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`
            DROP TABLE "user";
        `);
            yield queryRunner.query(`
            DROP TABLE "turn";
        `);
            yield queryRunner.query(`
            DROP TABLE "credentials";
        `);
        });
    }
}
exports.CreateTable1734342811157 = CreateTable1734342811157;
