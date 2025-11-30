/*
 * Ativar links quando clicarmos
 */
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

/**  Ativar links do orçamento
 * Quando clicarmos no botão increva-se da página seguros vai ser ativado as opções de forma
 * automática na página orçamento tudo através por parâmetro da url e javascript
 * E também ao escolher a bicicleta pelo botão comprar as bicicletas nebula.html, nimbus.html e magic.html ao
 * clicar no botão comprar ja direciona a página orcamento através dos parÂmetros a ativa mostrando a bicicleta que
 * foi selecionada
 */

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

/*Perguntas Frequentes mostrar e esconder através de uma class ativa */

const perguntas = document.querySelectorAll(".perguntas button");
//console.log(perguntas); mostra node lista dos botões

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);

  //console.log(pergunta);
  //console.log(controls);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

// console.log(galeria, galeriaContainer);

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(img); //prepend coloca elemento img na primeira posição da estrutura html img
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);


// Ativar plaugin  animação simple-anime
//Varificar se esta linkado ná pagina se tiver com link ativa senão não ativa
//Esta apenas index.html   <script src="./js/plugins/simple-anime.js"></script>


//Animação
if (window.SimpleAnime){
    new SimpleAnime();
}