// Eleva a criação da funções ao escopo global >>> aplica-se somente a variável var
// Variáveis inicialmente fica commo undefined se chamadas antes da atribuição

function funcaoqualquer() {
    console.log(text)

    var text = 'Texto qualquer.'
    console.log(text)

}

funcaoqualquer()

