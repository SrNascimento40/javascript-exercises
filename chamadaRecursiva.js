// Descrição
// Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   
// 
// Entrada
// A Entrada será composta por um número inteiro, N. 
// 
// Saída
// Será  impresso o somatório de N até 0, como no exemplo a baixo: 



// let n = parseInt(gets());

//TODO: Implemente um método que calcule o somatório de um número usando recursividade:
let soma = 0
function somatorio(n){
    for (n; n > 0; n--) {
        soma += n
    }
    console.log(soma);
}
somatorio(10)