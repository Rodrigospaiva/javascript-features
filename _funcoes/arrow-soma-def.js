var sum1 = function(a, b) {
    return a + b;
}

console.log(sum1(1,2));

// Arrow functions

var sum2 = (a, b) => a + b;     // para retorno simples tem o return implícito

console.log(sum2(1, 2))




var sum3 = (a, b) => {      // {} para algum statent
    var a = 5
    var b = -1
    return a + b;
}

console.log(sum3(1, 2))




