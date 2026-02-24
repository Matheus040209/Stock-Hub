import pool from "../config/database.js";

export const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, stock, code } = req.body;

  if (!name || !price || stock === undefined || !code) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO products (name, price, stock, code) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, price, stock, code]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar produto" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, code } = req.body;

  if (!name || !price || stock === undefined || !code) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }

  try {
    const result = await pool.query(
      "UPDATE products SET name = $1, price = $2, stock = $3, code = $4 WHERE id = $5 RETURNING *",
      [name, price, stock, code, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("DELETE FROM products WHERE id = $1 RETURNING *", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.json({ message: "Produto excluído com sucesso" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir produto" });
  }
};
