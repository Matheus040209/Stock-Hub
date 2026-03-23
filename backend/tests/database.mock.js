import { jest } from '@jest/globals';

const mockPool = {
  query: jest.fn()
};

jest.unstable_mockModule('../src/config/database.js', () => ({
  default: mockPool
}));

export { mockPool };

