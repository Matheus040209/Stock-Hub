import { jest, expect, describe, it, beforeEach } from '@jest/globals';

const mockProductService = await jest.unstable_mockModule('../src/services/product.service.js', () => ({
  getProducts: jest.fn(),
  createProduct: jest.fn(),
  updateProduct: jest.fn(),
  deleteProduct: jest.fn(),
}));

const { getProducts, createProduct, updateProduct, deleteProduct } = await import('../src/services/product.service.js');

const { getProducts: getProductsController, createProduct: createProductController, updateProduct: updateProductController, deleteProduct: deleteProductController } = await import('../src/controllers/product.controller.js');

describe('ProductController', () => {
  let req, res;

  beforeEach(() => {
    req = { body: {}, params: {} };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };
  });

  it('getProducts returns JSON', async () => {
    await getProductsController(req, res);
    expect(getProducts).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
  });

  it('createProduct valid returns 201', async () => {
    req.body = { name: 'Test', price: 10, stock: 5, code: 'TST' };
    createProduct.mockResolvedValue({ id: 1 });
    
    await createProductController(req, res);
    
    expect(createProduct).toHaveBeenCalledWith('Test', 10, 5, 'TST');
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it('createProduct invalid returns 400', async () => {
    req.body = { name: '' };
    createProduct.mockRejectedValue(new Error('Todos os campos são obrigatórios'));
    
    await createProductController(req, res);
    
    expect(res.status).toHaveBeenCalledWith(400);
  });
});

