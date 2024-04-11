// filtrarObjetoJson.js

// Array de objetos representando filmes
const catalogoFilmes = [
    { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
    { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
];

// Função para filtrar filmes por ano de lançamento
function filtrarFilmesPorAno(ano) {
    return catalogoFilmes.filter(filme => filme.anoLancamento === ano);
}

// Filtra os filmes lançados em 1999 e imprime no console
const filmesAno1999 = filtrarFilmesPorAno(1999);
console.log("Filmes Lançados em 1999:");
console.log(filmesAno1999);

// Filtra os filmes lançados em 2010 e imprime no console
const filmesAno2010 = filtrarFilmesPorAno(2010);
console.log("\nFilmes Lançados em 2010:");
console.log(filmesAno2010)
