import { MigrationInterface, QueryRunner } from "typeorm";

export class typeAsString1657768877998 implements MigrationInterface {
    name = 'typeAsString1657768877998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "type" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "appointment" ADD "type" TIMESTAMP`);
    }

}
