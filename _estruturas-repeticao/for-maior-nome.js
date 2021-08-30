let nomes = ["Alberto", "Alex", "Thiago Augusto dos Santos", "Ana Roberta"];
let tamanhoNome = 0;
let nome;

for (let indice = 0; indice < nomes.length; indice++) {

  if (nomes[indice].length > tamanhoNome) {

    nome = nomes[indice];
    tamanhoNome = nomes[indice].length;

  }

}

console.log(nome);