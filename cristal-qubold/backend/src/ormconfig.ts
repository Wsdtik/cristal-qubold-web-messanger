// ormconfig.ts
import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST ?? 'localhost',
  port: Number(process.env.POSTGRES_PORT) ?? 5432,
  username: process.env.POSTGRES_USER ?? 'your_username',
  password: process.env.POSTGRES_PASSWORD ?? 'your_password',
  database: process.env.POSTGRES_DB ?? 'your_database',
  entities: [__dirname + '/entities/*.ts'],
  synchronize: process.env.NODE_ENV !== 'production', // Disable in production
};

export default config;
