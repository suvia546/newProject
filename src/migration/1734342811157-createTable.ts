import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1734342811157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
            CREATE TABLE "credentials" (
           id SERIAL PRIMARY KEY,
           userName VARCHAR(100) NOT NULL UNIQUE,
           password VARCHAR(100) NOT NULL UNIQUE
            )
        `);

        await queryRunner.query(`
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
        await queryRunner.query(`
            CREATE TABLE "turns" (
            id SERIAL PRIMARY KEY,
            date VARCHAR(150) NOT NULL,
            time VARCHAR(100) NOT NULL,
            userId INT,
            FOREIGN KEY (userId) REFERENCES users (id) ON DELETE CASCADE,
            status VARCHAR(50) NOT NULL)
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.query(`
            DROP TABLE "user";
        `);
        await queryRunner.query(`
            DROP TABLE "turn";
        `);
        await queryRunner.query(`
            DROP TABLE "credentials";
        `);
    }

}
