import { MigrationInterface, QueryRunner } from "typeorm";

export class bootstrap1657766652733 implements MigrationInterface {
    name = 'bootstrap1657766652733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "doctor" ("id" BIGSERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_ee6bf6c8de78803212c548fcb94" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "appointment" ("id" BIGSERIAL NOT NULL, "doctorId" integer NOT NULL, "patientFirstName" character varying NOT NULL, "patientLastName" character varying NOT NULL, "startsAt" TIMESTAMP NOT NULL, "type" TIMESTAMP, CONSTRAINT "PK_e8be1a53027415e709ce8a2db74" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "appointment"`);
        await queryRunner.query(`DROP TABLE "doctor"`);
    }

}
