
var numeroFinal = 654
var contador = 0
var impares = 0


do {
    if ((contador % 2) != 0) {
        impares++
    }
    contador++
} while (contador < numeroFinal)

console.log("A variável apresenta " + impares + " números ímpares.")




/*  Simplesmente não funciona utilizando for =(

for ( let contador = 1; contador >= numeroFinal ; contador++ ) {

    if ((contador % 2) != 0) {
        impares++
    } else {
        console.log(numeroFinal)
    }

    console.log(impares)

}

console.log(impares + " números ímpares.")
*/