const text = "JavaScript";
const frase = 'Isso o meu "jogo"';

console.log(text + " " + frase);

//Próximo
const compras = 30;
const imposto = 10;
const total = compras + imposto;

//converter para número
const transformar = Number("20") + 20;
console.log(transformar);
console.log(total);

//Tipo de dados Objetos
//programa livro
const nome = "O Senhor dos Anéis";
const ano = 1954;
const autor = "J.R.R Tolkien";

const nomeFilme = "O Senhor dos anéis";
const anoFilme = 2001;
const diretorFilme = "Peter Jackson";

//Declarando objetos
const livro = {
  nome: "O Senhor dos Anéis",
  ano: 1954,
  autor: "J.R.R Tolkien",
};

const filme = {
  nome: "O Senhor dos Anéis",
  ano: 2001,
  autor: "J.R.R Tolkien",
  diretor: "Peter Jackson",
};

console.log(livro);
console.log(2025 - livro.ano);
console.log(livro.nome +" "+filme.diretor);

//Manipulando DOM
const texto = document.querySelector("p");
console.log(texto.innerHTML);

const decimal = 122.99;
console.log(Number (decimal.toFixed()) + 3);
console.log(decimal);

const total2 = '123'.length;

console.log(total2);


