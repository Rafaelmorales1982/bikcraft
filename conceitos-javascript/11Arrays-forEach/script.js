const lista = ["Javascript", "HTML", "CSS"];
/*
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
*/
//Criando loop for
const body = document.querySelector("body");

function adicionarBody(item, index) {
  body.innerHTML += "<ul><li>" + (index + 1) + ": " + item + "</li></ul>";
}
lista.forEach(adicionarBody);

//Utilizando querySelectorAll
const links = document.querySelectorAll("nav a");

function logHref(item) {
  const href = item.href;
  console.log(href);
}
links.forEach(logHref);

console.log(links[links.length - 1]);

//Métodos e Propriedades pop()-remove o último   shift()-remove p primeiro
// push() - adiciona ao final
//Criando lista para modificar o array
const lista2 = ["Javascript", "HTML", "CSS"];

//Removendo o último da lista pop()
const removeUltimo = lista2.pop();

//Removendo o primeiro da lista shift()
const removePrimeiro = lista2.shift();

//Adiciona itens na última posição da lista
lista2.push("PHP","Java");

console.log(lista2);
//Mostra qual item da lista foi removido
console.log(removeUltimo);
//Mostra qual item da lista foi removido
console.log(removePrimeiro);
