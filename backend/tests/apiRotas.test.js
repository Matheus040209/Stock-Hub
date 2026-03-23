import { jest } from '@jest/globals';
import request from 'supertest';
import express from 'express';
import router from '../routes/product.routes.js';
import db from '../config/database.js'; // import default do pool

// === MOCK do banco ===
jest.mock('../config/database.js', () => ({
  __esModule: true,
  default: {
    query: jest.fn()
  }
}));

const app = express();
app.use(express.json());
app.use('/products', router);

describe('Rotas Products', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  // =========================
  // GET /products
  // =========================
  describe('GET /products', () => {

    it('deve retornar lista de produtos', async () => {
      db.query.mockResolvedValue({
        rows: [{ id: 1, name: 'Produto 1', price: 10, stock: 5, code: 'ABC' }]
      });

      const res = await request(app).get('/products');

      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(1);
      expect(res.body[0].name).toBe('Produto 1');
    });

    it('deve retornar erro 500', async () => {
      db.query.mockRejectedValue(new Error('Erro'));

      const res = await request(app).get('/products');

      expect(res.statusCode).toBe(500);
      expect(res.body.error).toBe('Erro ao buscar produtos');
    });

  });

  // =========================
  // POST /products
  // =========================
  describe('POST /products', () => {

    it('deve criar um produto', async () => {
      const newProduct = { name: 'Produto Novo', price: 20, stock: 10, code: 'XYZ' };
      db.query.mockResolvedValue({ rows: [{ id: 2, ...newProduct }] });

      const res = await request(app)
        .post('/products')
        .send(newProduct);

      expect(res.statusCode).toBe(201);
      expect(res.body.name).toBe('Produto Novo');
    });

    it('deve retornar 400 se faltar campo', async () => {
      const res = await request(app)
        .post('/products')
        .send({ name: 'Produto Incompleto' });

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe('Todos os campos são obrigatórios');
    });

  });

  // =========================
  // PUT /products/:id
  // =========================
  describe('PUT /products/:id', () => {

    it('deve atualizar produto', async () => {
      const updated = { name: 'Atualizado', price: 30, stock: 15, code: 'UPD' };
      db.query.mockResolvedValue({ rows: [{ id: 1, ...updated }] });

      const res = await request(app)
        .put('/products/1')
        .send(updated);

      expect(res.statusCode).toBe(200);
      expect(res.body.name).toBe('Atualizado');
    });

    it('deve retornar 404 se não existir', async () => {
      db.query.mockResolvedValue({ rows: [] });

      const res = await request(app)
        .put('/products/999')
        .send({ name: 'Teste', price: 10, stock: 1, code: 'TST' });

      expect(res.statusCode).toBe(404);
      expect(res.body.error).toBe('Produto não encontrado');
    });

    it('deve retornar 400 se faltar campo', async () => {
      const res = await request(app)
        .put('/products/1')
        .send({});

      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBe('Todos os campos são obrigatórios');
    });

  });

  // =========================
  // DELETE /products/:id
  // =========================
  describe('DELETE /products/:id', () => {

    it('deve deletar produto', async () => {
      db.query.mockResolvedValue({ rows: [{ id: 1 }] });

      const res = await request(app)
        .delete('/products/1');

      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe('Produto excluído com sucesso');
    });

    it('deve retornar 404 se não existir', async () => {
      db.query.mockResolvedValue({ rows: [] });

      const res = await request(app)
        .delete('/products/999');

      expect(res.statusCode).toBe(404);
      expect(res.body.error).toBe('Produto não encontrado');
    });

    it('deve retornar 500 em caso de erro', async () => {
      db.query.mockRejectedValue(new Error('Erro interno'));

      const res = await request(app)
        .delete('/products/1');

      expect(res.statusCode).toBe(500);
      expect(res.body.error).toBe('Erro ao excluir produto');
    });

  });

});