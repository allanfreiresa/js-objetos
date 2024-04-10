const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
      return this.media >= mediaBase ? true : false
    }
    //arrow functions => nao funciona direiro dentro de objetos
    //estaAprovado: (mediaBase) => this.media >= mediaBase ? true : false
  }
  
console.log(estudante.estaAprovado(7));



const pessoa = {
    nome: "Maria",
    idade: 30,
    apresentar: function() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  };
  
  pessoa.apresentar(); // Saída: Olá, meu nome é Maria e eu tenho 30 anos.
  
//com arrow function =>

const pessoa2 = {
    nome: "João",
    idade: 25,
    apresentar: () => {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
  };
  
  pessoa2.apresentar(); // Saída: Olá, meu nome é undefined e eu tenho undefined anos.
  

  const cliente = {
    nome: "Jose",
    idade: 33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
  };
  
  cliente.animalEstimacao = [{
    nome: "Kripto",
    raca: "Cão",
    vacinado: true
  }];
  
  cliente.animalEstimacao.push({
    nome: "Lex",
    raca: "Gato",
    vacinado: false
  })

  
  const animalEstimacao = cliente.animalEstimacao.filter(animal => animal.raca === "Cão"); 
 console.log(animalEstimacao);
 console.log(animalEstimacao[0].nome);

  //const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)
//console.log(listaEnderecosComComplemento);




const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
    
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Saruman"
    
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Saruman
   