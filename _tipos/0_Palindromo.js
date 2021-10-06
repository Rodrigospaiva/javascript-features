// Verificar de duas formas diferentes se uma String é um palíndromo
// Palíndromo são frases ou palavras que podem ser lidas da direita para a esquerda e vice-versa

function verificaPalindromo(string) {

    if(!string) return `String inexistente.`    // Se não for o tipo string, sai da function

    return string.split("").reverse().join("") === string
}

function verificaPalindromo2(string) {

    if(!string) return "String inexistente"

    for (let i = 0; i < string.lenght / 2; i++) {
        if (string[i] !== string[string.lenght - 1 - i]) {
            return false
        }
    }

    return true
}



console.log(verificaPalindromo2("gato")) 
