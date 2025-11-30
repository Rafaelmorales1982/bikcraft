/*Iniciando os exercícios */

function livro(nome, autor, ano) {
  return {
    nome: nome,
    autor: autor,
    ano: ano 
  };
}
const meuLivro = livro("O Senhor dos Anéis".toUpperCase(),"J.R.R. Tolkien".toUpperCase(), 2050 - 1954 );
console.log(`Nome do livro: ${meuLivro.nome} foi lançado a ${meuLivro.ano} anos por ${meuLivro.autor}`);