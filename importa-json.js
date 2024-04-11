const estudante = require('./estudante.json');

console.log(estudante.nome);
console.log(typeof estudante)

const chaves = Object.keys(estudante);
console.log(chaves);

// Importação de um módulo nativo em Node.js
//const fs = require('fs');

// Agora, 'fs' contém as funcionalidades do módulo File System
//console.log(fs);