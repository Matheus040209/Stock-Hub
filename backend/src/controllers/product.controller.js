import * as productService from "../services/product.service.js";

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};

export const createProduct = async (req, res) => {
  const { name, price, stock, code } = req.body;

  try {
    const product = await productService.createProduct(name, price, stock, code);
    res.status(201).json(product);
  } catch (error) {
    if (error.message === "Todos os campos são obrigatórios") {
      return res.status(400).json({ error: error.message });
    }
    console.error(error);
    res.status(500).json({ error: "Erro ao criar produto" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, stock, code } = req.body;

  try {
    const product = await productService.updateProduct(id, name, price, stock, code);
    res.json(product);
  } catch (error) {
    if (error.message === "Todos os campos são obrigatórios" || error.message === "Produto não encontrado") {
      return res.status(400 || 404).json({ error: error.message });
    }
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await productService.deleteProduct(id);
    res.json(result);
  } catch (error) {
    if (error.message === "Produto não encontrado") {
      return res.status(404).json({ error: error.message });
    }
    console.error(error);
    res.status(500).json({ error: "Erro ao excluir produto" });
  }
};

