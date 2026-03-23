import { jest, expect, describe, it, beforeEach } from '@jest/globals';

const mockPool = await jest.unstable_mockModule('../src/config/database.js', () => ({
  default: {
    query: jest.fn()
  }
}));

const { default: pool } = await import('../src/config/database.js');
const { getAllProducts, createProduct } = await import('../src/repositories/product.repository.js');

describe('ProductRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getAllProducts calls pool.query with correct SQL', async () => {
    pool.query.mockResolvedValue({ rows: [] });
    
    await getAllProducts();
    
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM products ORDER BY id ASC");
  });

  it('createProduct calls INSERT with params', async () => {
    const mockResult = { rows: [{ id: 1 }] };
    pool.query.mockResolvedValue(mockResult);
    
    await createProduct('Test', 10, 5, 'STK001');
    
    expect(pool.query).toHaveBeenCalledWith(
      expect.stringContaining('INSERT INTO products'),
      ['Test', 10, 5, 'STK001']
    );
  });
});

