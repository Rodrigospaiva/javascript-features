function igualdade(num1, num2) {

    if (num1 === num2) { 
        return `são iguais` 
    } else { 
        return `não são iguais` 
    }

}

let num1 = 2
let num2 = 6

var equals = igualdade(num1, num2)

let sum = num1 + num2

// OK até aqui

function compara10(sum) {
    (sum < 10) ? `menor que` : `maior que`
}

compara10(sum)

function compara20(sum) {
    (sum < 20) ? `menor que` : `maior que`
}

compara20(sum)


console.log(`Os números ${num1} e ${num2} ${equals}.
Sua soma é ${sum}, que é ${compara10} 10 e ${compara20} que 20.`)