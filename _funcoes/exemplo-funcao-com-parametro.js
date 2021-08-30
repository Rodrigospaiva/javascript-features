let nota_1 = 9.8;
let nota_2 = 7;

let notas = [nota_1, nota_2];

function retorna_status_aluno(nota_1, nota_2) {

    let media = (nota_1 + nota_2) / (notas.length);
    let status;

    if (media >= 6) {
        status = 'Aprovado.';
    } else {
        status = 'Reprovado.';
    }

    return status;
}

let status_aluno_1 = retorna_status_aluno(nota_1, nota_2);

console.log('Quantidade de notas: ' + notas.length);
console.log('Primeira nota: ' + nota_1);
console.log('Segunda nota: ' + nota_2);

console.log("O Aluno 1 está: " + status_aluno_1);

