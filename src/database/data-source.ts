import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as entities from './entities';
import 'dotenv/config';

export const postgresConfig: PostgresConnectionOptions = { 
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),  // could put a layer arouund this and all env fetching for clearer error reporting
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: entities,
  synchronize: false,
  migrations: [
      "dist/database/migrations/*.{ts,js}"
  ],
}

const datasource = new DataSource(postgresConfig);
export default datasource;
