const lista = ["Javascript", "HTML", "CSS"];
/*
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
*/
//Criando loop for
const body = document.querySelector("body");

for(let i = 0; i < lista.length; i++){
  console.log(i+': '+lista[i]);
  
body.innerHTML += "<ul> <li>"+ (i + 1)+": "+ lista[i] + "</li></ol>";

}