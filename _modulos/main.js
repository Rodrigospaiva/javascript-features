var numero_1 = 20
var numero_2 = 5

import{ somaNumeros,subtracaoNumeros,multiplicacaoNumeros,divisaoNumeros } from './operacoes.js'
export {numero_1, numero_2}

let soma = somaNumeros(numero_1, numero_2)
let subtracao = subtracaoNumeros(numero_1, numero_2)
let multiplicacao = multiplicacaoNumeros(numero_1, numero_2)
let divisao = divisaoNumeros(numero_1, numero_2)

console.log(`Soma:  ${soma}
Subtração:          ${subtracao}
Multiplicação:      ${multiplicacao}
Divisão:            ${divisao}`)

