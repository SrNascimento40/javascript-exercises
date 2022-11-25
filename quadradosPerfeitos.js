// Desafio  
// Dado um inteiro n, retorne o menor número de números quadrados perfeitos cuja soma seja n. Um quadrado perfeito é um inteiro que é o quadrado de um inteiro; em outras palavras, é o produto de algum inteiro consigo mesmo. Por exemplo, 1, 4, 9 e 16 são quadrados perfeitos, enquanto 3 e 11 não são. 

// Entrada
// A entrada consiste em um número inteiro n, representando o valor total. 

// Saída
// A saída consiste em retornar o menor número de números quadrados perfeitos.

function perfectSquare(n) {
    while (n % 4 == 0) n /= 4;
    if (n % 8 == 7) return 4;
    for (let x = 0; x * x <= n; x++) {
            let y = Math.sqrt(n - x * x);
        if (x * x + y * y == n) {
            if (x == 0 || y == 0) return 1;
            else return 2;
        }
    }
    return 3;
}

console.log(perfectSquare(4));
console.log(perfectSquare(13));
console.log(perfectSquare(12));
console.log(perfectSquare(11));