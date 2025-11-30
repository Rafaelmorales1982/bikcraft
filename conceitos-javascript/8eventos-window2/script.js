function seguirMouse(event) {
  const circulo =  document.querySelector('#circulo');
  circulo.style.top = event.pageY + 'px';
  circulo.style.left = event.pageX + 'px';
}

window.addEventListener('mousemove', seguirMouse);