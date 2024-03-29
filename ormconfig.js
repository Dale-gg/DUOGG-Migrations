module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['./src/Models/*.ts', './src/Models/*.js'],
  migrations: ['./migrations/**/*.ts', './migrations/**/*.js'],
  seeds: ['./seeds/**/*.ts'],
  cli: {
    migrationsDir: './migrations',
  },
}
