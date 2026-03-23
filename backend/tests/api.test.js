import request from 'supertest';
import app from '../src/app.js';

describe('Product API Endpoints', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('GET /api/products should return status 200', async () => {
    const res = await request(app).get('/api/products');
    expect(res.status).toBe(200);
  });

  it('POST /api/products with valid data should return 201', async () => {
    const productData = {
      name: 'Test Notebook',
      price: 2500.00,
      stock: 5,
      code: 'STK-NB001'
    };

    const res = await request(app)
      .post('/api/products')
      .send(productData);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('name');
  });

  it('POST /api/products with empty body should return 400', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({});

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should handle PUT /api/products/:id', async () => {
    const res = await request(app).put('/api/products/1');
    expect(res.status).toBe(400); // or 500 if no DB
  });
});
