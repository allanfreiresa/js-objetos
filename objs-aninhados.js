const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
  }
  
  // código omitido

estudante.endereco = {
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  }
  
  console.log(estudante);
  
  // código omitido

console.log(estudante.endereco);
// código omitido

console.log(estudante.endereco.rua);



// Objeto representando um usuário com permissões
const usuario = {
    nome: 'Alice',
    idade: 25,
    isAdmin: true // Propriedade booleana indicando se o usuário é um administrador
  };
  
  // Exemplo de uso em uma condição
  if (usuario.isAdmin) {
    console.log(`${usuario.nome} tem permissões de administrador.`);
  } else {
    console.log(`${usuario.nome} não é um administrador.`);
  }
  
  const evento = {
    nome: "Aniversário",
    data: new Date(2000, 5, 15),
  }

  
  console.log(evento);