const botaoAtivar = document.querySelector('.botao-ativar');

function ativarAoClick(event){
  console.log('Clicou no botão!', event.x, event.y, event.type, event.target,event.timeStamp);
}
botaoAtivar.addEventListener('click', ativarAoClick);

console.log(botaoAtivar);