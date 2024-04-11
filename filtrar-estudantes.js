const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade);
    })
}

const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep')
console.log(listaEnderecosIncompletos);



const listaDeUsuarios = [
    { id: 1, nome: 'Alice', idade: 25 },
    { id: 2, nome: 'Bob', idade: 30 },
    { id: 3, nome: 'Charlie', idade: 22 }
  ]
  
  function encontrarUsuarioPorId(id) {
    return listaDeUsuarios.find(usuario => usuario.id === id);
  }


  function encontrarUsuarioPorId2(id) {
    return listaDeUsuarios.filter(usuario => usuario.id === id);
  }

  function encontrarUsuarioPorId3(id) {
    let usuarioEncontrado = null;
    listaDeUsuarios.forEach(usuario => {
      if (usuario.id === id) {
        usuarioEncontrado = usuario;
      }
    });
    return usuarioEncontrado;
  }

  console.log(encontrarUsuarioPorId(2));
  console.log(encontrarUsuarioPorId2(1));
  console.log(encontrarUsuarioPorId2(3));
