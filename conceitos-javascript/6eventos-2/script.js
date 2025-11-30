const botao = document.querySelector('.botao');

function mostrarTexto(){
  const texto = document.querySelector('.texto');
  texto.classList.toggle('ativar');/*Adiciona um nova classe chamada ativar e onde será executada por uma função para mostrar */
  // ou esconder o texto ao clicar no botão. por causa toggle ele verifica se esta ativo ou não
}

botao.addEventListener('click', mostrarTexto);