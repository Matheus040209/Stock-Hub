export default {
  testEnvironment: "node",

  // ESSENCIAL: carregar .env nos testes
  setupFiles: ["./tests/setup.js"],

  // necessário para ESM funcionar melhor
  transform: {},

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
};