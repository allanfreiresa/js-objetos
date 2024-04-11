// operacoesJson.js
const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
};

// Converte o objeto produto para uma string
const stringJsonProduto = JSON.stringify(produto);

// Imprime no console a string do objeto produto
console.log("String do Produto:");
console.log(stringJsonProduto);
