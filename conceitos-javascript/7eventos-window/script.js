//Sobre o objeto window
console.log (window.innerHeight); //Altura da janela
console.log (window.innerWidth); //Largura da janela  

//Função da cordenada do mouse
function coordenadaMouse(event){
  const coordenadas  = {
    x: event.x,
    y: event.y
  };
  console.log(coordenadas);
} 

//window.addEventListener('mousemove', coordenadaMouse);
function scrollPagina(){
  console.log("Você está rolando a página");
  console.log(window.scrollY); //Mostra a quantidade de px rolados na página  
}
window.addEventListener('scroll',scrollPagina);