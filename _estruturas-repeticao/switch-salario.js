const tipoUsuario = 'Gerente';
let salario = 2500;

switch (tipoUsuario) {
  
case 'Diretor':
    salario = salario * 1.2;
    break;
  
case 'Gerente':
    salario = salario * 1.15;
    break;
  
default:
    salario = salario * 1.1;
    break;
}

console.log(salario);