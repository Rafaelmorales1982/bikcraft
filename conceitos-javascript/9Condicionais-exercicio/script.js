const botao = document.querySelector("button");
//botao é true se o elemento existir na página
//console.log(Boolean(botao));

function somar() {
  const div = document.querySelector("div");
  let valor = Number(div.innerText); //trnsforma o texto em número
  valor++;
  if (valor <= 10) {
    div.innerHTML = valor;
  } else {
    alert("O valor não pode ser maior que 10");
  }
}

if (botao) {
  botao.addEventListener("click", somar);
}
