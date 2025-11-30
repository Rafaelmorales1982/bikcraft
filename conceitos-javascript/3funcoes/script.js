/*Função sem parâmetro */
function logCurso(){
  const nome  = 'Javascript';
  console.log(nome)
}
logCurso();
logCurso();
logCurso();
/* Com parâmetros e argumentos*/
function nomeCurso(nome, horas){
  const horasCruso = horas;
  const nomeCurso = nome;
  console.log('Curso de ' + nomeCurso + ' com carga de ' + horasCruso + ' horas.');
}

nomeCurso('JavaScript',40);
nomeCurso('HTML',30);
nomeCurso('CSS',20);

/*Função com return */

