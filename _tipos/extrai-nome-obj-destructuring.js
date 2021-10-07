// Object Destructuring é a seleção de dados em um objeto ({ seleção })

const user = {
    id: 01,
    displayName: `Nakavera`,
    fullName: {
        firstName: `Rodrigo`,
        middleName: `da Silva de`,
        lastName: `Paiva`
    }
}

function userId({id}){
    return id;
}
console.log(userId(user))


function firstAndLastName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`
}
console.log(firstAndLastName(user))