<div align="center">
  <img height="150" src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" />
</div>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?color=00F7FF&size=35&center=true&vCenter=true&width=1000&lines=Stock+Hub;Gerenciamento+de+Estoque;Clean+Architecture+Node.js+Express+PostgreSQL" />
</div>

---

<h3 align="center">💻 Sistema Completo de Estoque</h3>

<p align="center">
🚀 Clean Architecture com testes completos <br>
⚡ API RESTful + Frontend moderno <br>
🧪 100% testado (Jest + Supertest)
</p>

---

## 🧠 Stack Tecnológica

### 🎨 Frontend
<p align="center">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
</p>

### ⚙️ Backend  
<p align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white"/>
</p>

### 🧪 Testes & DevOps
<p align="center">
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
<img src="https://img.shields.io/badge/Supertest-FF6C37?style=for-the-badge&logoColor=white"/>
<img src="https://img.shields.io/badge/Vitest-FF6B35?style=for-the-badge&logoColor=white"/>
<img src="https://img.shields.io/badge/Nodemon-76DA20?style=for-the-badge&logo=nodemon&logoColor=black"/>
</p>

---

## 🚀 Início Rápido

```bash
# 1. Clonar e instalar
git clone https://github.com/cleverton-god/Stock-Hub
cd Stock-Hub/backend
npm install

# 2. Configurar .env (copiar .env.example)
# 3. Criar DB stockhub + executar database.sql

# 4. Rodar
npm run dev    # localhost:3000
npm test       # Testes completos
npm start      # Produção
```

## 📊 Estrutura Clean Architecture

```
server.js → app.js → routes → controller → service → repository → PostgreSQL
                ↓
           Frontend (Bootstrap)
```

## 🔌 API Endpoints

| Endpoint | Método | Status |
|----------|--------|--------|
| `/api/products` | `GET` | ✅ |
| `/api/products` | `POST` | ✅ |
| `/api/products/:id` | `PUT` | ✅ |
| `/api/products/:id` | `DELETE` | ✅ |

## 🧪 Status Testes

```
✅ Controller (3 testes)
✅ Service (4 testes)
✅ Repository (2 testes)
✅ API (3 testes)
✅ Integration (2 testes)
---
TOTAL: 17 testes passando!
```

## 📈 Estrutura Banco

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INTEGER NOT NULL,
  code VARCHAR(20) UNIQUE NOT NULL
);
```

---

## 📋 Troubleshooting

| ❌ Erro | ✅ Solução |
|---------|------------|
| Password DB | Configurar `.env` |
| Porta ocupada | `PORT=3001` |
| Tests falham | `npm test -- --detectOpenHandles` |

---

## 🤝 Contribuindo

1. Fork → `git clone`
2. `npm install`
3. `git checkout -b feature/nova-funcionalidade`
4. Commit + PR

## 📄 Licença

[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

## 👥 Autores

[Cleverton Rosa](https://github.com/cleverton-god) • [Flavio Henrique](https://github.com/flaviohfp) • [Matheus Spilmam](https://github.com/Matheus040209)

<div align="center">
  <img src="https://img.shields.io/badge/⭐-Star_this_repo!-blue?style=for-the-badge&logo=github&logoColor=white" />
</div>

