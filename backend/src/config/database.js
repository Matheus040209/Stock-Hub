import pkg from "pg";
const { Pool } = pkg;

// Validação obrigatória das variáveis
if (!process.env.DB_USER) throw new Error("DB_USER não definido");
if (!process.env.DB_HOST) throw new Error("DB_HOST não definido");
if (!process.env.DB_DATABASE) throw new Error("DB_DATABASE não definido");
if (!process.env.DB_PASSWORD) throw new Error("DB_PASSWORD não definido");
if (!process.env.DB_PORT) throw new Error("DB_PORT não definido");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export default pool;