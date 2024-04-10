/*1 - Crie um arquivo chamado livro.js. Nesse arquivo, 
crie um objeto livro que represente as informações de um livro. 
O objeto deve conter as seguintes propriedades:
titulo (string): título do livro.
autor (string): nome do autor do livro.
anoPublicacao (number): ano de publicação do livro.
genero (string): gênero do livro.
No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.*/

const livro1 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia"
};

console.log(`Detalhes do Livro:
    Título: ${livro1.titulo}
    Autor: ${livro1.autor}
    Ano de Publicação: ${livro1.anoPublicacao}
    Gênero: ${livro1.genero}`);

    console.log(livro1);
/*2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro 
foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de 
publicação.
Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, 
são exibidas corretamente.
*/

// livro.js
const anoAtual = new Date().getFullYear();

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoDePublicacao: 1954,
    genero: "Fantasia",
};

// Adicionando a propriedade idadePublicacao diretamente ao objeto livro
livro.idadePublicacao = anoAtual - livro.anoDePublicacao;

// Criando uma string com os detalhes do livro, incluindo a idade de publicação
livro.mostrarDetalhes = "Detalhes do Livro:\n" +
                        "Título: " + livro.titulo + "\n" +
                        "Autor: " + livro.autor + "\n" +
                        "Ano de Publicação: " + livro.anoDePublicacao + "\n" +
                        "Gênero: " + livro.genero + "\n" +
                        "Idade de Publicação: " + livro.idadePublicacao + " anos";

// Exibindo os detalhes do livro no console
console.log(livro.mostrarDetalhes);


/*3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console 
os detalhes do livro.*/

// livro.js
const anoAtual2 = new Date().getFullYear();

const livro2 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual2 - 1954,
};

// Exemplos de acesso direto às propriedades do objeto livro
console.log("Detalhes do Livro:");
console.log("Título: " + livro2['titulo']);
console.log("Autor: " + livro2['autor']);
console.log("Ano de Publicação: " + livro2['anoPublicacao']);
console.log("Gênero: " + livro2['genero']);
console.log("Idade de Publicação: " + livro2['idadePublicacao'] + " anos");


/*4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
No final do arquivo livro.js, adicione uma avaliação ao objeto.
Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.*/

// livro.js
const anoAtual3 = new Date().getFullYear();

const livro3 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual3 - 1954,
    avaliacao: null, // Nova propriedade para armazenar a avaliação
};

console.log(livro3);
// Adicionando uma avaliação fictícia ao objeto livro
const novaAvaliacao = { nota: 4.5, comentario: "Ótima leitura!" };
if (livro.avaliacao === null) {
    livro.avaliacao = novaAvaliacao;
} else {
    console.log("Este livro já possui uma avaliação.");
}

// Exibindo detalhes do livro, incluindo a avaliação
console.log("Detalhes do Livro:");
console.log("Título: " + livro3.titulo);
console.log("Autor: " + livro3.autor);
console.log("Ano de Publicação: " + livro3.anoPublicacao);
console.log("Gênero: " + livro3.genero);
console.log("Idade de Publicação: " + livro3.idadePublicacao + " anos");
console.log("Avaliação: " + (livro3.avaliacao === null ? "Nenhuma avaliação disponível." : "Nota: " + livro3.avaliacao.nota + ", Comentário: \"" + livro.avaliacao.comentario + "\""));

console.log(novaAvaliacao);

/*5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, 
gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".*/

// livro.js
const anoAtual5 = new Date().getFullYear();

const livro5 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual5 - 1954,
    avaliacao: null
};

// Alteração direta do gênero do livro
livro5.genero = "Aventura";

// Exibição dos detalhes do livro no console
console.log(`Detalhes do Livro:
    Título: ${livro5.titulo}
    Autor: ${livro5.autor}
    Ano de Publicação: ${livro5.anoPublicacao}
    Gênero: ${livro5.genero}
    Idade de Publicação: ${livro5.idadePublicacao} anos
    Avaliação: ${livro5.avaliacao === null ? "Nenhuma avaliação disponível." : `Nota: ${livro5.avaliacao.nota}, Comentário: "${livro5.avaliacao.comentario}"`}`)

/*6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, 
idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, 
verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.*/

// livro.js
const anoAtual6 = new Date().getFullYear();

const livro6 = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
    avaliacao: { nota: 4.5, comentario: "Ótima leitura!" }
};

// Excluir a propriedade 'avaliacao' do objeto livro
delete livro6.avaliacao;

// Exibir detalhes do livro no console sem a avaliação
console.log(`Detalhes do Livro:
    Título: ${livro6.titulo}
    Autor: ${livro6.autor}
    Ano de Publicação: ${livro6.anoPublicacao}
    Gênero: ${livro6.genero}
    Idade de Publicação: ${livro6.idadePublicacao} anos
    Avaliação: Nenhuma avaliação disponível.`)

    console.log(livro6);
