/*const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
  }
  
  
  estudante.telefone = '551199999999';
  console.log(estudante.telefone);
  console.log(estudante);
  
  estudante.nome = 'José Souza';
  console.log(estudante);

  const estudante2 = {};
estudante2.nome = 'Ana Maria'
console.log(estudante2);
*/
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }
   
//delete objPersonagem.aliado 
//delete objPersonagem.aliado
//delete objPersonagem["status"]
 
console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

console.log(objPersonagem) //undefined


const delProp = delete objPersonagem.aliado
//const delPropInexistente = delete objPersonagem["endereco"]
const delPropInexistente = delete objPersonagem["teste"]
 
console.log(delProp) //true
console.log(delPropInexistente) //true

console.log(objPersonagem) //undefined
