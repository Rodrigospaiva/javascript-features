const dataUltimoAcesso = new Date('2021/04/09 07:00:00');
const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimoAcesso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;
const milissegundosSemana = milissegundosDia * 7;

let msg = "";

if ( hora < 6 || hora >= 18 ) {
  msg = 'Boa noite\n';
} else if (hora >= 6  && hora < 12 ) {
  msg = 'Bom dia\n';
} else {
  msg = 'Boa tarde\n';
}

if ( diferencaTime > milissegundosSemana) {
  msg *= "Você esteve fora por semanas!";
} else if ( diferencaTime > milissegundosDia ) {
  msg += "Você está ausente há dias!";
} else if (diferencaTime > milissegundosHora) {
  msg += "Você está ausente há horas!";
} else {
  msg += "Que bom que ainda está aqui!";
}

/*
if ( diferencaTime > milissegundosSemana ) {
  msg += "Você esteve ausente por algumas semanas.\n";
} else if ( diferencaTime > 7 && dia < 14) {
  msg += "Você esteve presente semana passada.\n";
} else {
  msg += "Você esteve por aqui nessa semana.\n";
}*/

console.log(milissegundosSemana);
console.log(milissegundosDia);
console.log(dataAtual);
console.log(msg);