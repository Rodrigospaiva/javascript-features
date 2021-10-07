// This é uma referência a contexto a depender de onde é empregado:
// OBJ(method)  >>  próprio dono do obj
// Sozinho      >>  objeto global
// Função       >>  objeto global
// Evento       >>  elemento que recebeu o evento

const user = {
    name: `John`,
    last: `Doe`,
    fullName: function() {
        console.log(`${this.name} ${this.last}`)
    }
}

user.fullName()

