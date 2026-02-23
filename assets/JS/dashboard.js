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

// Modal de exclusão
const deleteModal = document.querySelector(".delete-modal");
const deleteText = document.getElementById("delete-text");
const btnCancelDelete = document.getElementById("btnCancelDelete");
const btnConfirmDelete = document.getElementById("btnConfirmDelete");

let products = [];
let editIndex = null;
let deleteIndex = null;

// ======================================================
// CAMADA DE DADOS
// ======================================================
const ProductService = {
    getAll: () => JSON.parse(localStorage.getItem("products")) || [],
    saveAll: (data) => localStorage.setItem("products", JSON.stringify(data)),
    generateCode: (existingProducts) => {
        let code;
        do { code = `STK-${Math.floor(100000 + Math.random() * 900000)}`; }
        while (existingProducts.some(p => p.code === code));
        return code;
    }
};

// ======================================================
// UI - MODAL
// ======================================================
function openModal(edit = false, index = null) {
    modal.classList.add("active");
    if (edit && index !== null) {
        const product = products[index];
        inputNome.value = product.name;
        inputPreco.value = product.price;
        inputEstoque.value = product.stock;
        inputCodigo.value = product.code;
        editIndex = index;
    } else {
        inputNome.value = "";
        inputPreco.value = "";
        inputEstoque.value = "";
        inputCodigo.value = ProductService.generateCode(products);
        editIndex = null;
    }
    inputCodigo.readOnly = true;
}

function closeModal() {
    modal.classList.remove("active");
    editIndex = null;
}
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

// ======================================================
// VALIDAÇÃO
// ======================================================
function validateProduct({ name, price, stock }) {
    if (!name.trim()) return alert("Nome é obrigatório."), false;
    if (isNaN(price) || price <= 0) return alert("Preço inválido."), false;
    if (!Number.isInteger(stock) || stock < 0) return alert("Estoque deve ser um número inteiro positivo."), false;
    return true;
}

// ======================================================
// RENDERIZAÇÃO
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
                <button data-action="edit" data-index="${index}" class="btn-edit">✏️</button>
                <button data-action="delete" data-index="${index}" class="btn-delete">🗑️</button>
            </td>
        `;
        productList.appendChild(tr);
    });
}

// ======================================================
// CRUD
// ======================================================
function createProduct(product) { products.push(product); }
function updateProduct(index, product) { products[index] = product; }
function saveAndRender() { ProductService.saveAll(products); renderProducts(); }
function editProduct(index) { openModal(true, index); }

// ======================================================
// MODAL DE EXCLUSÃO
// ======================================================
function openDeleteModal(index) {
    deleteIndex = index;
    const product = products[index];
    const codeWithoutPrefix = product.code.replace(/^STK-/, '');
    deleteText.textContent = `Deseja realmente excluir o produto "${product.name}" (Código: ${codeWithoutPrefix})?`;
    deleteModal.classList.add("active");
}
function closeDeleteModal() { deleteModal.classList.remove("active"); deleteIndex = null; }
btnCancelDelete.addEventListener("click", closeDeleteModal);
btnConfirmDelete.addEventListener("click", () => {
    if (deleteIndex !== null) {
        products.splice(deleteIndex, 1);
        saveAndRender();
        closeDeleteModal();
    }
});
deleteModal.addEventListener("click", e => { if (e.target === deleteModal) closeDeleteModal(); });

// ======================================================
// EVENTOS PRINCIPAIS
// ======================================================
btnAdd.addEventListener("click", () => openModal());
btnSalvar.addEventListener("click", () => {
    const productData = {
        name: inputNome.value.trim(),
        price: Number(inputPreco.value),
        stock: parseInt(inputEstoque.value),
        code: inputCodigo.value
    };
    if (!validateProduct(productData)) return;
    if (editIndex !== null) updateProduct(editIndex, productData);
    else createProduct(productData);
    saveAndRender();
    closeModal();
});

// Delegação de eventos para editar/excluir
productList.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const index = Number(btn.dataset.index);
    if (btn.dataset.action === "edit") editProduct(index);
    if (btn.dataset.action === "delete") openDeleteModal(index);
});

// ======================================================
// INICIALIZAÇÃO
// ======================================================
function init() { products = ProductService.getAll(); renderProducts(); }
init();
