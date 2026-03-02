-- Script de criação do banco de dados e tabela para o Stock Hub

-- Criar o banco de dados (execute apenas se o banco não existir)
-- CREATE DATABASE stockhub;

-- Conecte ao banco de dados stockhub antes de executar este script

-- Criar a tabela de produtos
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL DEFAULT 0,
    code VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir alguns produtos de exemplo (opcional)
-- INSERT INTO products (name, price, stock, code) VALUES 
--     ('Produto Exemplo', 99.99, 10, 'STK-000001');
