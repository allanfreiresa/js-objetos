// utilizarRequire.js
const dados = require('./dados.json');

// Imprime no console o conteúdo importado
console.log("Conteúdo importado de dados.json:");
console.log(dados);

// Acessa diferentes propriedades do objeto importado e imprime no console
console.log("\nAcesso aos dados:");
console.log("Produtos:", dados.produtos);
console.log("Usuários:", dados.usuarios);
