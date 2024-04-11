const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
     enderecos: [{
       rua: 'Rua Joseph Climber',
       numero: '45',
       complemento: 'apto 43'
     },
     {
       rua: 'Rua Dona Clotilde',
       numero: '71',
       complemento: null
    }]
  }
  
  const chavesObjeto = Object.keys(estudante);
  console.log(chavesObjeto);

  const chavesValoresObjeto = Object.entries(estudante);
  console.log(chavesValoresObjeto);
  console.log(chavesValoresObjeto[0]);
  console.log(chavesValoresObjeto[0][0]);
  console.log(chavesValoresObjeto[0][1]);

  
  //código omitido

if (!chavesObjeto.includes('enderecos')) {
  console.error('é necessário ter um endereço cadastrado')
}


const objetoOriginal = { a: 1, b: 2 };
const objetoParaCopiar = { b: 3, c: 4 };

const objetoFusionado = Object.assign({}, objetoOriginal, objetoParaCopiar);

console.log(objetoFusionado);
// Saída: { a: 1, b: 3, c: 4 }


const meuObjeto = {};

Object.defineProperty(meuObjeto, 'propriedadeNaoEnumeravel', {
  value: 42,
  enumerable: true
});

for (let chave in meuObjeto) {
  console.log(chave); // Saída: (nenhuma, pois não há propriedades enumeráveis)
}

console.log(Object.keys(meuObjeto)); // Saída: []
console.log(meuObjeto.propriedadeNaoEnumeravel); // Saída: 42