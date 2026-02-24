// ======================================================
// CONFIG API
// ======================================================
const API_URL = "http://localhost:3000/api/products";

// ======================================================
// ELEMENTOS UI
// ======================================================
const modal = document.querySelector(".modal-container");
const productList = document.getElementById("product-list");
const btnAdd = document.getElementById("btn-add");
const btnSalvar = document.getElementById("btnSalvar");
const inputNome = document.getElementById("m-nome");
const inputPreco = document.getElementById("m-preco");
const inputEstoque = document.getElementById("m-estoque");
const inputCodigo = document.getElementById("m-codigo");

// Modal exclusão
const deleteModal = document.querySelector(".delete-modal");
const deleteText = document.getElementById("delete-text");
const btnCancelDelete = document.getElementById("btnCancelDelete");
const btnConfirmDelete = document.getElementById("btnConfirmDelete");

let products = [];
let editId = null;
let deleteId = null;

// ======================================================
// SERVICE (API)
// ======================================================
const ProductService = {

  async getAll() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro ao buscar produtos");
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      alert("Erro ao carregar produtos: " + error.message);
      return [];
    }
  },

  async create(product) {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro ao criar produto");
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      alert("Erro ao criar produto: " + error.message);
      throw error;
    }
  },

  async update(id, product) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro ao atualizar produto");
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      alert("Erro ao atualizar produto: " + error.message);
      throw error;
    }
  },

  async delete(id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Erro ao excluir produto");
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
      alert("Erro ao excluir produto: " + error.message);
      throw error;
    }
  },

  generateCode() {
    return `STK-${Math.floor(100000 + Math.random() * 900000)}`;
  }
};

// ======================================================
// MODAL
// ======================================================
function openModal(edit = false, product = null) {
  modal.classList.add("active");

  if (edit && product) {
    inputNome.value = product.name;
    inputPreco.value = product.price;
    inputEstoque.value = product.stock;
    inputCodigo.value = product.code;
    editId = product.id;
  } else {
    inputNome.value = "";
    inputPreco.value = "";
    inputEstoque.value = "";
    inputCodigo.value = ProductService.generateCode();
    editId = null;
  }

  inputCodigo.readOnly = true;
}

function closeModal() {
  modal.classList.remove("active");
  editId = null;
}

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

// ======================================================
// VALIDAÇÃO
// ======================================================
function validateProduct({ name, price, stock }) {
  if (!name.trim()) return alert("Nome é obrigatório."), false;
  if (isNaN(price) || price <= 0) return alert("Preço inválido."), false;
  if (!Number.isInteger(stock) || stock < 0)
    return alert("Estoque deve ser inteiro positivo."), false;
  return true;
}

// ======================================================
// RENDER
// ======================================================
function renderProducts() {
  productList.innerHTML = "";

  products.forEach((product, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${product.name}</td>
      <td>R$ ${Number(product.price).toFixed(2)}</td>
      <td>${product.stock}</td>
      <td>${product.code}</td>
      <td class="actions">
        <button data-action="edit" data-id="${product.id}" class="btn-edit">✏️</button>
        <button data-action="delete" data-id="${product.id}" class="btn-delete">🗑️</button>
      </td>
    `;

    productList.appendChild(tr);
  });
}

// ======================================================
// CRUD
// ======================================================
async function loadProducts() {
  products = await ProductService.getAll();
  renderProducts();
}

async function saveProduct() {
  const productData = {
    name: inputNome.value.trim(),
    price: Number(inputPreco.value),
    stock: parseInt(inputEstoque.value),
    code: inputCodigo.value
  };

  if (!validateProduct(productData)) return;

  if (editId) {
    await ProductService.update(editId, productData);
  } else {
    await ProductService.create(productData);
  }

  await loadProducts();
  closeModal();
}

async function deleteProduct() {
  if (deleteId) {
    await ProductService.delete(deleteId);
    await loadProducts();
    closeDeleteModal();
  }
}

// ======================================================
// MODAL EXCLUSÃO
// ======================================================
function openDeleteModal(id) {
  deleteId = id;
  const product = products.find(p => p.id === id);

  const codeWithoutPrefix = product.code.replace(/^STK-/, "");
  deleteText.textContent =
    `Deseja realmente excluir "${product.name}" (Código: ${codeWithoutPrefix})?`;

  deleteModal.classList.add("active");
}

function closeDeleteModal() {
  deleteModal.classList.remove("active");
  deleteId = null;
}

btnCancelDelete.addEventListener("click", closeDeleteModal);
btnConfirmDelete.addEventListener("click", deleteProduct);

deleteModal.addEventListener("click", e => {
  if (e.target === deleteModal) closeDeleteModal();
});

// ======================================================
// EVENTOS
// ======================================================
btnAdd.addEventListener("click", () => openModal());
btnSalvar.addEventListener("click", saveProduct);

productList.addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const id = Number(btn.dataset.id);

  if (btn.dataset.action === "edit") {
    const product = products.find(p => p.id === id);
    openModal(true, product);
  }

  if (btn.dataset.action === "delete") {
    openDeleteModal(id);
  }
});

// ======================================================
// INIT
// ======================================================
loadProducts();