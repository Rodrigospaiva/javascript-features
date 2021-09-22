// Curryng retorna uma nova função para cada parâmetro

function soma(a) {
    return function soma(b) {
        return a + b;
    }
}

const soma1 = soma(10); // AQUI esta adicionando o primeiro parâmetro

console.log(soma1(1));  // adicionando segundo parâmetro
console.log(soma1(2));  // adicionando segundo parâmetro
console.log(soma1(5));  // adicionando segundo parâmetro
console.log(soma1(10));  // adicionando segundo parâmetro