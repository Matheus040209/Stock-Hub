import pool from "../config/database.js";

export const getAllProducts = async () => {
  const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
  return result.rows;
};

export const createProduct = async (name, price, stock, code) => {
  const result = await pool.query(
    "INSERT INTO products (name, price, stock, code) VALUES ($1, $2, $3, $4) RETURNING *",
    [name, price, stock, code]
  );
  return result.rows[0];
};

export const updateProduct = async (id, name, price, stock, code) => {
  const result = await pool.query(
    "UPDATE products SET name = $1, price = $2, stock = $3, code = $4 WHERE id = $5 RETURNING *",
    [name, price, stock, code, id]
  );
  return result.rows[0];
};

export const deleteProduct = async (id) => {
  const result = await pool.query("DELETE FROM products WHERE id = $1 RETURNING *", [id]);
  return result.rows[0];
};

