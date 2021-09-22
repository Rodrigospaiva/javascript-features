// Nas alterações de objeto ou array é criado um novo com a alterção
// Ou seja: É passado por referência
// Speed operator(...): coloca o parâmetro dentro do novo objeto 

const user = {
    name: 'Rodrigo',
    lastName: 'Paiva'
};

function getUserFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    };
};

const userWithFullName = getUserFullName(user)
console.log(userWithFullName)

