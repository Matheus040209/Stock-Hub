import request from 'supertest';
import app from '../src/app.js';

describe('Product API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('GET /api/products - should return 200', async () => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
  });

  test('POST /api/products - valid data returns 201', async () => {
    const product = {
      name: 'Test Product',
      price: 99.99,
      stock: 10,
      code: 'STK-TEST123'
    };

    const response = await request(app)
      .post('/api/products')
      .send(product);

    expect(response.status).toBe(201);
  });

  test('POST /api/products - invalid data returns 400', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({});

    expect(response.status).toBe(400);
  });
});

