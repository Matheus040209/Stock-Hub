<div align="center">

# 📦 Stock Hub

### Sistema de Gerenciamento de Estoque
**Trabalho de Testes de Sistemas · Curso Técnico em Desenvolvimento de Sistemas · SENAI**

[![Node](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)](https://jestjs.io)
[![Tests](https://img.shields.io/badge/testes-17%20passando-brightgreen?style=flat-square)](#-testes)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

</div>

---

## 👥 Equipe

| | Nome | GitHub |
|---|---|---|
| 👨‍💻 | **Flavio Henrique** | [@flaviohfp](https://github.com/flaviohfp) |
| 👨‍💻 | **Matheus Spilmam** | [@Matheus040209](https://github.com/Matheus040209) |
| 👨‍💻 | **Cleverton Rosa** | [@cleverton-god](https://github.com/cleverton-god) |

> 📚 Projeto desenvolvido como trabalho prático da disciplina de **Testes de Sistemas** — Curso Técnico em Desenvolvimento de Sistemas · SENAI

---

## 📌 Sobre o Projeto

O **Stock Hub** é uma aplicação web completa de gerenciamento de estoque, desenvolvida com foco em **Clean Architecture**, cobertura de testes e boas práticas de engenharia de software.

A aplicação expõe uma **API RESTful** construída com Node.js + Express, integrada a um banco **PostgreSQL**, com frontend em Bootstrap e uma suíte de testes abrangendo controllers, services, repositories, endpoints e fluxos de integração — totalizando **17 testes passando**.

---

## 🧠 Stack Tecnológica

### 🎨 Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### ⚙️ Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)

### 🧪 Testes & DevOps
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Supertest](https://img.shields.io/badge/Supertest-FF6C37?style=for-the-badge&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Nodemon](https://img.shields.io/badge/Nodemon-76DA20?style=for-the-badge&logo=nodemon&logoColor=black)

---

## 🚀 Como Rodar
```bash
# 1. Clonar o repositório
git clone https://github.com/cleverton-god/Stock-Hub
cd Stock-Hub/backend

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais do PostgreSQL

# 4. Criar banco e executar migration
# Crie o banco "stockhub" no PostgreSQL e execute o arquivo database.sql

# 5. Iniciar a aplicação
npm run dev     # Desenvolvimento → localhost:3000
npm test        # Rodar todos os testes
npm start       # Produção
```

---

## 🏗️ Arquitetura

O projeto segue o padrão **Clean Architecture**, separando responsabilidades em camadas bem definidas e testáveis de forma independente:
```
┌─────────────────────────────────────────────┐
│                  Frontend                   │
│            (HTML + Bootstrap + JS)          │
└───────────────────┬─────────────────────────┘
                    │ HTTP
┌───────────────────▼─────────────────────────┐
│            server.js  →  app.js             │
├─────────────────────────────────────────────┤
│                  Routes                     │
├─────────────────────────────────────────────┤
│                Controller                   │
├─────────────────────────────────────────────┤
│                  Service                    │
├─────────────────────────────────────────────┤
│                Repository                   │
├─────────────────────────────────────────────┤
│               PostgreSQL 🐘                 │
└─────────────────────────────────────────────┘
```

Cada camada tem **responsabilidade única** e é testada de forma isolada — garantindo manutenibilidade, rastreabilidade de falhas e facilidade de evolução do sistema.

---

## 🔌 Endpoints da API

| Endpoint | Método | Descrição |
|---|---|---|
| `/api/products` | `GET` | Lista todos os produtos |
| `/api/products` | `POST` | Cadastra novo produto |
| `/api/products/:id` | `PUT` | Atualiza produto por ID |
| `/api/products/:id` | `DELETE` | Remove produto por ID |

---

## 🧪 Testes

A suíte de testes cobre **todas as camadas** da aplicação, do repositório até os endpoints HTTP.
```
 CAMADA              QTDE    STATUS
──────────────────────────────────────
 Controller           3       ✅ OK
 Service              4       ✅ OK
 Repository           2       ✅ OK
 API (endpoints)      3       ✅ OK
 Integração           2       ✅ OK  (3 em prod)
──────────────────────────────────────
 TOTAL               17       ✅ todos passando
```

**Executar os testes:**
```bash
# Rodar tudo
npm test

# Se houver handles abertos (conexões pendentes)
npm test -- --detectOpenHandles
```

---

## 🗄️ Banco de Dados

Modelo da tabela principal utilizada pela aplicação:
```sql
CREATE TABLE IF NOT EXISTS products (
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(255)   NOT NULL,
    price      DECIMAL(10, 2) NOT NULL,
    stock      INTEGER        NOT NULL DEFAULT 0,
    code       VARCHAR(50)    UNIQUE NOT NULL,
    created_at TIMESTAMP      DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP      DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🛠️ Troubleshooting

| Problema | Solução |
|---|---|
| Erro de autenticação no banco | Verifique usuário e senha no `.env` |
| Porta 3000 em uso | Defina `PORT=3001` no `.env` |
| Testes travando sem encerrar | Use `npm test -- --detectOpenHandles` |
| Banco `stockhub` não encontrado | Crie o banco manualmente e rode o `database.sql` |
| Módulo não encontrado | Confirme que rodou `npm install` dentro de `/backend` |

---

## 🤝 Contribuindo
```bash
# 1. Fork o repositório
# 2. Crie uma branch para sua feature
git checkout -b feature/minha-feature

# 3. Faça suas alterações e commit
git commit -m "feat: descrição da minha feature"

# 4. Push e abra um Pull Request
git push origin feature/minha-feature
```

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

Feito com 💻 e ☕ por **Flavio**, **Matheus** e **Cleverton** · SENAI 2025

⭐ Gostou do projeto? Deixa uma estrela no repositório!

</div>
