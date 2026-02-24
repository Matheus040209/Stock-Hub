<div align="center">

# 📦 Stock Hub

### 📊 Gerenciador de Produtos em Estoque

Stock Hub é uma aplicação web moderna para gerenciar produtos em estoque, permitindo adicionar, editar e excluir itens.

</div>

---

## 📌 Sobre o Projeto

O **Stock Hub** foi desenvolvido como um projeto de estudo de **CRUD com JavaScript puro**. Ele permite controlar produtos de forma prática e visual, com uma interface limpa, responsiva e interativa.

---

## 🛠 Tecnologias Utilizadas

### Front-end
<p>
  <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
</p>

### Back-end
<p>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
</p>

---

## ✨ Funcionalidades

- ✅ Adicionar produtos com **nome, preço, estoque e código único**
- ✅ Editar produtos existentes
- ✅ Excluir produtos com confirmação
- ✅ Tabela dinâmica com listagem de produtos
- ✅ Modal para adicionar e editar produtos
- ✅ Tema claro e escuro
- ✅ Geração automática de código (`STK-XXXXXX`)

---

## 📂 Estrutura do Projeto

```
bash
Stock-Hub/
│
├── frontend/                  # Front-end (HTML, CSS, JS)
│   ├── index.html            # Página inicial
│   ├── dashboard.html        # Tela de gerenciamento de produtos
│   ├── assets/
│   │   ├── CSS/
│   │   │   └── style.css    # Estilos da aplicação
│   │   ├── JS/
│   │   │   ├── dashboard.js # Lógica principal da dashboard
│   │   │   └── theme.js    # Script de troca de tema
│   │   └── img/            # Imagens e preview
│
├── backend/                   # Back-end (Node.js, Express, PostgreSQL)
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js # Configuração do banco de dados
│   │   │   └── env.js      # Variáveis de ambiente
│   │   ├── controllers/
│   │   │   └── product.controller.js # Lógica dos produtos
│   │   ├── routes/
│   │   │   └── product.routes.js     # Rotas da API
│   │   ├── app.js       # Configuração do Express
│   │   └── server.js    # Inicialização do servidor
│   ├── .env             # Variáveis de ambiente
│   └── package.json     # Dependências do projeto
│
├── Histórias do Usuário/      # Documentação de requisitos
└── README.md                  # Documentação
```

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e configurado

### Backend

```
bash
cd backend
npm install
# Configure o arquivo .env com suas credenciais do banco de dados
npm run dev
```

### Frontend

Abra o arquivo `frontend/index.html` no seu navegador ou use um servidor local.

---

## 📡 API Endpoints

| Método | Endpoint          | Descrição              |
| ------ | ----------------- | ---------------------- |
| GET    | /api/products     | Lista todos os produtos |
| POST   | /api/products     | Cria um novo produto   |
| PUT    | /api/products/:id | Atualiza um produto   |
| DELETE | /api/products/:id | Exclui um produto     |

---

## 👨‍💻 Autores

| Nome               | GitHub                                         |
| ------------------ | ---------------------------------------------- |
| Flavio Henrique    | [flavio](https://github.com/flaviohfp)         |
| Matheus  spilmam   | [matheus](https://github.com/Matheus040209)    |
| Cleverton rosa     | [cleverton](https://github.com/cleverton-god)  |

---

## 🎯 Objetivo

Praticar desenvolvimento Front-end e Back-end com **CRUD em JavaScript**, criando uma aplicação funcional, responsiva e próxima de um sistema real de gerenciamento de estoque.

---

⭐ Se gostou do projeto, deixe uma estrela no repositório!
