// Quando um parâmetro não for passado para a função, pode-se fazer:

function multiply(a, b = 2) {       // Aqui é setado um valor default para b
    return a * b;
}

console.log(multiply(a = 3));           // utiliza o valor padrão
console.log(multiply(a = 3, b = 4));    // não utiliza o valor padrão


// Lazy evaluation

function randomNumber() {               // Gera um número aleatório
    return Math.random() * 100
}

console.log('Numero aleatório: ' + randomNumber())  // Chama a função e gera outro número aleatório

function multiply1(a, b = randomNumber()) {
    return a * b
}

console.log('Numero aleatório Lazy evaluation: ' + randomNumber())
console.log(multiply(2))

