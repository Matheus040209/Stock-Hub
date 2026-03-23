import * as productRepository from "../repositories/product.repository.js";

export const getProducts = async () => {
  return await productRepository.getAllProducts();
};

export const createProduct = async (name, price, stock, code) => {
  if (!name || !price || stock === undefined || !code) {
    throw new Error("Todos os campos são obrigatórios");
  }
  return await productRepository.createProduct(name, price, stock, code);
};

export const updateProduct = async (id, name, price, stock, code) => {
  if (!name || !price || stock === undefined || !code) {
    throw new Error("Todos os campos são obrigatórios");
  }
  const updated = await productRepository.updateProduct(id, name, price, stock, code);
  if (!updated) {
    throw new Error("Produto não encontrado");
  }
  return updated;
};

export const deleteProduct = async (id) => {
  const deleted = await productRepository.deleteProduct(id);
  if (!deleted) {
    throw new Error("Produto não encontrado");
  }
  return { message: "Produto excluído com sucesso" };
};

