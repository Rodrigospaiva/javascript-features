// Função Auto-Invocável ===> IIFE (Immediately Invoked Function Expression)
// Colocar a função entre parenteses e acrescentar o parâmetros ao final
// 

(
    function() {
        let name = "Rodrigo S. Paiva"
        return name
    }
)()

// console.log(name)

//////

(
    function(a, b) {
    return a + b
}
)(1, 3)

console.log()

//////

const soma4 = (
    function(a, b) {
    return a + b
}
)(1, 3)

console.log(soma4)

