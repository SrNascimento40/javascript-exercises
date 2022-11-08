//currying = é possível passar as variáveis conforme tenha acesso a elas

function custoViagem(distancia) {
    return function custocarro(kmPorLitro) {
        return function combustivel(preco) {
            return ((distancia/kmPorLitro)*preco).toFixed(2)
        }
    }
}
// 
// function custoViagem(distancia, kmPorLitro, preco) {
//     return distancia*kmPorLitro*preco
// }

const percurso = custoViagem(35)
const consumo = percurso(42)

//dia A a gasolina estava 5 reais o litro
const custoDaViagemDiaA = consumo(5)
console.log("no dia A a viagem custará R$" + custoDaViagemDiaA);

//dia B a gasolina subiu para 7 reais o litro
const custoDaViagemDiaB = consumo(7)
console.log("no dia B a viagem custará R$" + custoDaViagemDiaB);
