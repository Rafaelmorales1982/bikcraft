//Código para clicar imagens deixando cada uma delas na parte principal
//Selecionar apenas as trÊs imagens dentro da ul

const imagens = document.querySelectorAll("#galeria li img");
// console.log(imagens);

function galeriaTrocar(event){
    const principal = document.querySelector("#imagem-principal");
    const clicada = event.currentTarget;
    principal.src = clicada.src;
    principal.alt

}

function galeriaClique(imagem){
    imagem.addEventListener('click', galeriaTrocar);
}

imagens.forEach(galeriaClique);