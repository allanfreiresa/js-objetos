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
  
  function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
  }
  
  exibirTelefones(estudante.telefones[0], estudante.telefones[1]);

  //há uma maneira melhor
  //usando o operador de espalhamento
  exibirTelefones(...estudante.telefones);

  //melhor exemplo onde pega-se informações de objetos a partir de outro
const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
  }
  
  console.log(dadosEnvio);
  

  dadosEnvio2 = {
    destinatario: estudante.nome,
    rua: estudante.enderecos[0].rua,
    numero: estudante.enderecos[0].numero}

    console.log(dadosEnvio2);



    const fichaGuerreiro = {
        nome: "Aragorn",
        classe: "guerreiro"
       }
        
       const equipoGuerreiro = {
        espada: "Andúril",
        capa: "capa élfica +2"
       }

       const ranger = {
        nome: "Legolas",
        classe: "ranger"
       }
       

       //const guerreiro = { fichaGuerreiro, equipoGuerreiro }
       const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro, ...ranger }

console.log(guerreiro)
