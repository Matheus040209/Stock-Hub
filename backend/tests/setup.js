// Mock database para testes
const { Pool } = await import('pg');
jest.mock('pg', () => ({
  Pool: jest.fn(() => ({
    query: jest.fn()
  }))
}));

global.mockPool = {
  query: jest.fn()
};

