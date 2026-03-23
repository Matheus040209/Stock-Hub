# 📦 Stock Hub

<div align="center">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Express-5.x-blue?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/PostgreSQL-16-green?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL">
  <img src="https://img.shields.io/badge/Node.js-20+-informational?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
</div>

**Stock Hub** é um sistema completo de gerenciamento de estoque moderno, construído com Clean Architecture e full-stack Node.js.

[![Dashboard Preview](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Stock+Hub+Dashboard)](https://github.com/cleverton-god/Stock-Hub)

## ✨ Funcionalidades

- 📋 **CRUD Completo** de produtos (nome, preço, estoque, código único)
- 🎨 **Interface Moderna** (Bootstrap 5 + Dark/Light theme) 
- 🔄 **Auto-reload** em desenvolvimento (Nodemon)
- ⚡ **API RESTful** (Express 5 + PostgreSQL)
- 🌐 **Frontend servido pelo Backend** (`localhost:3000`)
- 📱 **Responsivo** em todos dispositivos

## 🛠 Stack Tecnológica

| Camada | Tecnologias |
|--------|-------------|
| **Backend** | Node.js, Express 5, PostgreSQL, Nodemon |
| **Frontend** | HTML5, CSS3, Vanilla JS, Bootstrap 5 |
| **Banco** | PostgreSQL 16+ |
| **Arquitetura** | **Clean Architecture** (Controller → Service → Repository → DB) |

## 🚀 Instalação Rápida (5 minutos)

### Como rodar

**Desenvolvimento:**
```bash
cd backend
npm install
npm run dev
```

**Produção:**
```bash
npm start
```

**Testes (Jest + ESM):**
```bash
cd backend
npm test
```

**O que é testado:**
- Unit: controller, service, repository (100% mocks)
- API: supertest endpoints
- Integration: fluxos completos

### 1️⃣ Pré-requisitos
```
Node.js 18+           [https://nodejs.org]
PostgreSQL 13+        [https://postgresql.org]
```

### 2️⃣ Clonar e Configurar Banco

```bash
git clone <repo-url>
cd Stock-Hub
```

**Criar banco PostgreSQL:**
```bash
# pgAdmin ou psql
CREATE DATABASE stockhub;
```

**Executar schema:**
```bash
psql -U postgres -d stockhub -f backend/database.sql
```

### 3️⃣ Configurar Backend (.env)

Crie `backend/.env`:
```env
# PostgreSQL
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=stockhub  
DB_PASSWORD=your_password
DB_PORT=5432

# Server
PORT=3000
```

### 4️⃣ Rodar Projeto (1 comando!)

```bash
cd backend
npm install
npm run dev
```

✅ **http://localhost:3000** → Frontend + API funcionando!

## 📁 Estrutura Clean Architecture

```
backend/src/
├── server.js              # Entrypoint
├── app.js                 # Express + Frontend serving  
├── routes/                # API Routes
├── controllers/           # HTTP Handlers  
├── services/              # Business Logic 
├── repositories/          # Data Access  
└── config/                # DB/ENV
```

## 🔌 API Reference

| Endpoint | Método | Descrição | Body |
|----------|--------|-----------|------|
| `/api/products` | `GET` | Listar produtos | - |
| `/api/products` | `POST` | Criar produto | `{name, price, stock, code}` |
| `/api/products/:id` | `PUT` | Atualizar | `{name, price, stock, code}` |
| `/api/products/:id` | `DELETE` | Excluir | - |

## ⚙️ Scripts NPM

```bash
npm run dev    # 🚀 Dev server + Hot Reload
npm start      # 📦 Production
npm test       # 🧪 Tests (Jest)
```

## 🐳 Docker (Opcional)

```bash
docker-compose up -d
```

## 🔍 Troubleshooting

| Problema | Solução |
|----------|---------|
| **Porta ocupada** | `PORT=3001 npm run dev` |
| **DB conexão** | Verifique `.env` |
| **CORS erro** | Backend deve estar rodando |
| **ENOENT frontend** | `npm run dev` no `backend/` |

## 📈 Estrutura DB

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL, 
  stock INTEGER NOT NULL DEFAULT 0,
  code VARCHAR(20) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie branch `feat/nova-funcionalidade`
3. Commit com mensagem clara
4. Push e abra PR

## 📄 Licença

[MIT](LICENSE) - Use livremente!

## 👨‍💻 Autores

| Nome               | GitHub                                         |
| ------------------ | ---------------------------------------------- |
| Flavio Henrique    | [flavio](https://github.com/flaviohfp)         |
| Matheus  spilmam   | [matheus](https://github.com/Matheus040209)    |
| Cleverton rosa     | [cleverton](https://github.com/cleverton-god)  |


<div align="center">
  <strong>⭐ Star se ajudou você!</strong>
</div>

