const estudante = require('./estudante.json')

const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log(typeof stringEstudante);

//Código omitido

console.log(stringEstudante.nome);

const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);

console.log(objEstudante.nome);


const objetoOriginal = { chave: 'valor' };
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal.chave); // Saída: valor
console.log(copiaProfunda.chave); // Saída: valor


const novoLivro = {
    "titulo": "Node.js: Guia Prático",
    "autor": "Alice Coder",
    "genero": "Tecnologia",
    "ano_publicacao": 2022
  };
  
  const biblioteca = require("./biblioteca.json");
  biblioteca.push(novoLivro);
  
  const bibliotecaString = JSON.stringify(biblioteca);

  console.log(biblioteca);