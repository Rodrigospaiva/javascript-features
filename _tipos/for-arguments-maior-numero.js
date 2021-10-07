// Arguments é um objeto iterável
// Função que verifica qual o maior número dos argumentos passados

function findMax() {

    let max = -Infinity

    for (let i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i]
        }
    }
    return max
}

console.log(`O maior número no array é: `,findMax(5, 80, 32))