import { jest, expect, describe, it, beforeEach } from '@jest/globals';

const mockProductRepository = await jest.unstable_mockModule('../src/repositories/product.repository.js', () => ({
  getAllProducts: jest.fn(),
  createProduct: jest.fn(),
  updateProduct: jest.fn(),
  deleteProduct: jest.fn(),
}));

const { getAllProducts, createProduct, updateProduct, deleteProduct } = await import('../src/repositories/product.repository.js');

const { getProducts, createProduct: createProductService, updateProduct: updateProductService, deleteProduct: deleteProductService } = await import('../src/services/product.service.js');

describe('ProductService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getProducts delegates to repository', async () => {
    const mockProducts = [{ id: 1, name: 'Test' }];
    getAllProducts.mockResolvedValue(mockProducts);
    
    const result = await getProducts();
    
    expect(getAllProducts).toHaveBeenCalled();
    expect(result).toEqual(mockProducts);
  });

  it('createProduct validates and delegates', async () => {
    const mockProduct = { id: 1, name: 'Valid Test' };
    createProduct.mockResolvedValue(mockProduct);
    
    const result = await createProductService('Valid Test', 10, 5, 'STK001');
    
    expect(createProduct).toHaveBeenCalledWith('Valid Test', 10, 5, 'STK001');
    expect(result).toEqual(mockProduct);
  });

  it('createProduct throws on missing fields', async () => {
    await expect(createProductService('', 10, 5, 'STK001'))
      .rejects.toThrow('Todos os campos são obrigatórios');
  });

  it('updateProduct handles not found', async () => {
    updateProduct.mockResolvedValue(null);
    
    await expect(updateProductService('1', 'Test', 10, 5, 'STK001'))
      .rejects.toThrow('Produto não encontrado');
  });
});

