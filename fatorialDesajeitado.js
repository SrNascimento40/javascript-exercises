// Desafio
// O fatorial de um número inteiro positivo N é o produto de todos os inteiros positivos menores ou iguais a n. Fazemos um fatorial desajeitado usando os inteiros em ordem decrescente, trocando as operações de multiplicação por uma rotação fixa de operações cuja ordem é: multiplicar '*', dividir '/', adicionar '+' e subtrair '-'. Por exemplo, desajeitado(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1. Lembre-se que no fatorial desajeitado as operações ainda são aplicadas usando a ordem usual de operações aritméticas. Além disso, a divisão neste caso sempre resulta em um número inteiro, por exemplo, 90 / 8 = 11. Dado um inteiro N, retorne o fatorial desajeitado de n.

// Entrada
// A entrada consiste em um valor inteiro positivo N.

// Saída
// A saída consiste em retornar o valor do seu fatorial desajeitado de N, conforme exemplo abaixo.

// let lines = gets().split("\n"); 
// let n = parseInt(lines.shift()); 

let n = 54


let counter = 1
let resultado = n
let paraSomar = 0

while (n > 1) {

    if (counter === 1) {
        resultado = n * (n - 1)
        if (paraSomar !== 0) {
            resultado = resultado * -1
        }
        n--

        counter = 2
    } else if (counter === 2) {
        resultado = Math.round(resultado / (n - 1))
        n--

        counter = 3
    } else if (counter === 3) {
        resultado = resultado + (n - 1)
        n--

        counter = 4
        if (paraSomar == 0) {
            paraSomar = resultado
            resultado = 0
        } else {
            paraSomar += resultado
            resultado = 0
        }
    } else if (counter === 4) {

        if (n == 2) {
            paraSomar -= 1
            counter = 1
            n--
        } else {
            n--

            counter = 1

            resultado = 0
        }
    }
}
paraSomar += resultado

console.log(paraSomar);

// TODO: Calcule o valor do fatorial de "n", atribuindo o retorno a "r".