export default {
  testEnvironment: 'node',
  transformIgnorePatterns: [
    'node_modules/(?!(pg)/)'
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
};
