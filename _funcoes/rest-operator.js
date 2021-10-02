function sum(a, b) {            // Realiza a soma independente do número de argumentos

    var value = 0

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i]
    }

    return value
}

console.log("A primeira soma é: " + sum(1, 2, 7))

// Rest Operator ... (forma reduzida da operação acima)
