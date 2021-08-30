const dataAtual = new Date();

// Vai imprimir o mês atual - 1
console.log( 'getMonth', dataAtual.getMonth());

// Vai imprimir o mês atual
console.log( 'getMonth', dataAtual.getMonth() + 1);

const data2 = new Date();

console.log( 'ano = '+ data2.getFullYear() );
console.log( 'mes = ' + data2.getMonth() );
console.log( 'dia = ' + data2.getDate() );
console.log( 'hora = ' + data2.getHours() );
console.log( 'minutos = ' + data2.getMinutes() );
console.log( 'segundos = ' + data2.getSeconds() );
console.log( 'milisegundos = ' + data2.getMilliseconds() );
console.log( 'dia da semana = ' + data2.getDay() );

console.log('===== Em UTC: =====');

console.log( 'ano = '+ data2.getUTCFullYear() );
console.log( 'mes = ' + data2.getUTCMonth() );
console.log( 'dia = ' + data2.getUTCDate() );
console.log( 'hora = ' + data2.getUTCHours() );
console.log( 'minutos = ' + data2.getUTCMinutes() );
console.log( 'segundos = ' + data2.getUTCSeconds() );
console.log( 'milisegundos = ' + data2.getUTCMilliseconds() );
console.log( 'dia da semana = ' + data2.getUTCDay() );

/*
comsole.log('===== timestamp =====');
const data3 = new Date();

console.log( data3.getTime() );
console.log( data3.getTimezoneOffset() );
console.log( data3.valueOf() );
*/